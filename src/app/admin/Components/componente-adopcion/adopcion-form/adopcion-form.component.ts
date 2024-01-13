// pet-form.component.ts
import { Component, Input, OnChanges, SimpleChanges, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PetService } from 'src/app/client/services/pet.service';
export interface State {
  idEstado: number
  estadoDesc: string
  adopciones: any[]
  animales: any[]
  apadrinamientos: any[]
  rescates: any[]
  usuarios: any[]
  voluntarios: any[]
}

@Component({
  selector: 'app-adopcion-form',
  templateUrl: './adopcion-form.component.html',
  styleUrls: ['./adopcion-form.component.scss']
})
export class AdopcionFormComponent implements OnInit, OnChanges {
  @Input() formData: any;
  @Output() editedDataEmitter = new EventEmitter<any>(); // To emit edited data


  myForm!: FormGroup;
  showimage!: boolean;
  dataPet!: any;
  base64String!: string
  stateanimal: State[] = []
  showImg!: string;
  state: boolean = false
  typeanimal: any[] = []
  StateSalud: any[] = []

  constructor(private fb: FormBuilder,
    private animalService: PetService) { }

  ngOnInit(): void {
    this.createform();
    this.getEstados();
    this.loadImage();
    this.getTypeAnimal();
    this.getEstadosSalud();
    this.myForm.valueChanges.subscribe(() => {
      this.editedDataEmitter.emit(this.myForm.value);
    });

  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['formData']) {
      this.state = true
      this.dataPet = changes['formData'].currentValue;
      this.setdata(this.dataPet);

    }
  }

  createform() {
    this.myForm = this.fb.group({
      Nombre: ['', Validators.required],
      SaludDesc: ['', Validators.required],
      Sexo: ['', Validators.required],
      Foto: [null, Validators.required],
      idTipo: [null, Validators.required],
      IdEstado: ['', Validators.required],
      IdEstadoSalud: ['', Validators.required]

    });
  }

  setdata(data: any) {
    
    if (data) {
      console.log("data",data);

      const estadoEncontrado = this.StateSalud.find(estado => estado.status === data.estadoSalud);
      this.myForm.get('Nombre')?.setValue(data.nombre);
      this.myForm.get('SaludDesc')?.setValue(data.saludDesc);
      this.myForm.get('Sexo')?.setValue(data.sexo);
      this.showimage = data.foto ? true : false
      this.showImg = data.foto;
      this.myForm.get('Foto')?.setValue(data.foto);
      this.myForm.get('idTipo')?.setValue(data.idTipo);
      this.myForm.get('IdEstado')?.setValue(data.idEstado);
      this.myForm.get('IdEstadoSalud')?.setValue(data.idEstadoSalud);
    }
  }

  handleFileInput(event: any) {
    const file = event.target.files[0];
    this.myForm.get('Foto')?.setValue(file);
    this.handleFileInputChange(file);
  }

  getEstados(): void {
    this.animalService.GetEstados().subscribe((res) => {
      this.stateanimal = res.data;
    });
  }
  //Estado de Salud
  getEstadosSalud(): void {
    this.animalService.GetEstadosSalud().subscribe((res) => {
      this.StateSalud = res.data;
    });
  }


  getTypeAnimal(): void {
    this.animalService.GetTypeAnimal().subscribe((res) => {
      this.typeanimal = res.data;
    });
  }

  // Otras funciones
  async handleFileInputChange(file: any) {
    if (file) {
      try {
        const base64String = await this.animalService.convertImageToBase64(file);
        this.base64String = base64String;
        this.showImg = this.base64String
        this.showimage = this.base64String ? true : false
      } catch (error) {
        console.error(error);
      }
    }
  }


  async loadImage(): Promise<void> {
    const imageBlob = await this.animalService.getImageLocal();
    const fakeImageFile = new File([imageBlob], 'fotodefault.png', { type: 'image/png  ' });
    this.myForm.get('Foto')?.setValue(fakeImageFile);
    this.handleFileInputChange(fakeImageFile);

  }

}

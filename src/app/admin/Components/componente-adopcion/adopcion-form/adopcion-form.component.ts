// pet-form.component.ts
import { Component, Input, OnChanges, SimpleChanges, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdopcionesService } from 'src/app/client/services/adopciones.service';
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
  estudios: any[] = []


  showimage!: boolean;
  dataPet!: any;
  base64String!: string
  stateanimal: State[] = []
  showImg!: string;
  state: boolean = false
  typeanimal: any[] = []
  StateSalud: any[] = []



  constructor(private fb: FormBuilder,
    private animalService: PetService,
    private ServiceAdopciones: AdopcionesService) { }

  ngOnInit(): void {
    this.createform();
    this.getEstudios();

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
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      direccion: ['', Validators.required],
      fechaNac: ['', Validators.required],
      telefono: ['', Validators.required],
      correo: ['', Validators.required],
      idEstudios: ['', Validators.required],
      motivo: ['', Validators.required],
      idAnimal: ['', Validators.required],
      idEstado: ['', Validators.required],
      fechaVisita: ['', Validators.required],
      estadoSeguimiento: ['', Validators.required],
      detallesSeguimiento: ['', Validators.required],
    });
  }




  setdata(data: any) {
    if (data) {
      console.log("data", data);
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
  

  getEstados(): void {
    this.animalService.GetEstados().subscribe((res) => {
      this.stateanimal = res.data;
    });
  }

  getEstudios(): void {
    this.ServiceAdopciones.GetEstudios().subscribe((res) => {
      this.estudios = res.data;
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


}

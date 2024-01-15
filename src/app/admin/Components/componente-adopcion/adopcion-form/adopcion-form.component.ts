// pet-form.component.ts
import { Component, Input, OnChanges, SimpleChanges, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import { finalize } from 'rxjs/operators';
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
  @Input() IdData: any;

  @Output() editedDataEmitter = new EventEmitter<any>(); // To emit edited data


  myForm!: FormGroup;
  estudios: any[] = []
  animaldata: any[] = []
  showseguimiento: boolean = false;
  stateseguimiento = [
    { idEstado: true, estadoDesc: 'Realizado' },
    { idEstado: false, estadoDesc: 'Pendiente' }
  ];
  edit: boolean = false


  showimage!: boolean;
  base64String!: string
  stateanimal: State[] = []
  state: boolean = false
  typeanimal: any[] = []
  StateSalud: any[] = []



  constructor(private fb: FormBuilder,
    private animalService: PetService,
    private ServiceAdopciones: AdopcionesService) { }

  ngOnInit(): void {
    this.getEstados()
    this.getEstudios();
    this.createform();

    this.getTypeAnimal();
    this.getEstadosSalud();
    this.myForm.valueChanges.subscribe(() => {
      this.editedDataEmitter.emit(this.myForm.value);
    });

  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['formData']) {
      let dataadopcion = changes['formData'].currentValue;
      this.getAnimals(dataadopcion)

    } else if (changes['IdData']) {
      this.IdData = changes['IdData'].currentValue;
      this.getAnimals()
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
      nameAnimal: ['', Validators.required],
      idEstado: ['', Validators.required],
      sateseguimiento: this.fb.group({
        fechaVisita: ['', Validators.required],
        estadoSeguimiento: ['', Validators.required],
        detallesSeguimiento: ['', Validators.required]
      })
    });
  }
  valdiateIcon(value: number): boolean {
    const FindEstudio = this.stateanimal.find(state => state.idEstado === value);
    return FindEstudio?.estadoDesc === "Aprobado" ? true : false;
  }
  
  setRegiste(data: any) {
    if (data) {
      const FindAnimal = this.animaldata.find(animal => animal.idAnimal === data.idAnimal);
      this.myForm.get('idAnimal')?.setValue(data.idAnimal);
      this.myForm.get('nameAnimal')?.setValue(FindAnimal.nombre);
    }
  }

  setdata(data: any) {
    if (data) {
      this.showseguimiento = this.valdiateIcon(data.estadoAdopcion);     
      this.edit = true;
      const FindAnimal = this.animaldata.find(animal => animal.idAnimal === 5);
      const fechaSolo = data.fechaNac?.slice(0, 10);
      const fechaVisita = data.fechaVisita?.slice(0, 10);

      const fechaDosSemanasDespues = moment().add(2, 'weeks');
      this.myForm.get('nombre')?.setValue(data.nombre);
      this.myForm.get('apellido')?.setValue(data.apellido);
      this.myForm.get('direccion')?.setValue(data.direccion);
      this.myForm.get('fechaNac')?.setValue(fechaSolo ?? "");
      this.myForm.get('telefono')?.setValue(data.telefono);
      this.myForm.get('correo')?.setValue(data.correo);
      this.myForm.get('idEstudios')?.setValue(data.idEstudios ?? 1);
      this.myForm.get('motivo')?.setValue(data.motivo);
      this.myForm.get('idAnimal')?.setValue(data.idAnimal);
      this.myForm.get('nameAnimal')?.setValue(FindAnimal.nombre);
      this.myForm.get('idEstado')?.setValue(data.idEstado);
      if (this.showseguimiento) {
        this.myForm.get('sateseguimiento.fechaVisita')?.setValue(fechaVisita ?? fechaDosSemanasDespues.format('YYYY-MM-DD'));
        this.myForm.get('sateseguimiento.estadoSeguimiento')?.setValue(data.estadoSeguimiento ?? false);
        this.myForm.get('sateseguimiento.detallesSeguimiento')?.setValue(data.detallesSeguimiento ?? "");
      }
    } else {
      this.edit = false;
    }

  }

  getAnimals(dataadopcion?: any): void {
    this.animalService.getAnimals().pipe(
      finalize(() => {
        if (this.IdData) {
          this.setRegiste(this.IdData)
        } else if (dataadopcion) {
          this.setdata(dataadopcion);
        }
      })
    ).subscribe((res) => {
      this.animaldata = res.data;
    });
  }

  getEstudios(): void {
    this.ServiceAdopciones.GetEstudios().subscribe((res) => {
      this.estudios = res.data;
    });
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


}

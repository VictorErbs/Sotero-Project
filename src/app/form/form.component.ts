import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';  
import { CommonModule } from '@angular/common';  
import { HttpClient, HttpClientModule } from '@angular/common/http';  

@Component({
  selector: 'app-form', // Define o seletor do componente
  templateUrl: './form.component.html', // Especifica o arquivo HTML do componente
  styleUrls: ['./form.component.scss'], // Especifica o arquivo de estilos do componente
  standalone: true, // Permite que o componente funcione sem ser vinculado a um módulo Angular tradicional
  imports: [FormsModule, CommonModule, HttpClientModule] // Importa módulos necessários para formulários, funcionalidade comum e HTTP
})
export class FormComponent {
  user = {
    name: '', // Estrutura de dados do formulário
    email: '',
    age: null
  };

  constructor(private http: HttpClient) {} // Injeta o serviço HttpClient para realizar requisições HTTP

  onSubmit() {
    // Envia os dados do formulário para uma API usando um POST HTTP
    this.http.post('http://localhost:8000/api/form/', this.user).subscribe(
      response => {
        console.log('Resposta do servidor:', response); // Lida com a resposta da API
      },
      error => {
        console.error('Erro ao enviar dados:', error); // Lida com erros da API
      }
    );
  }
}

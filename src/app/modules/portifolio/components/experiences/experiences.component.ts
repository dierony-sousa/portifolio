import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

// Interface
import { IExperiences } from '../../interface/IExperiences.interface';

@Component({
  selector: 'app-experiences',
  imports: [CommonModule],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.css',
})
export class ExperiencesComponent {
  public arrayExperiences = signal<IExperiences[]>([
    {
      summary: {
        strong: 'Analista de Suporte',
        p: 'Automatiza | Set 2024 - Present',
      },
      text: '<p>Analista de Suporte Técnico na Automatiza desde setembro de 2024. Realizo suporte ao cliente, instalação de software, troca de servidores, ajustes em bancos de dados PostgreSQL e gerenciamento de backups.</p>',
    },
    {
      summary: {
        strong: 'Desenvolvedor Front-End',
        p: 'CompassUOL | Set 2023 - Fev 2024',
      },
      text: '<p>Estagiei como Desenvolvedor Front-End na Compass UOL de setembro de 2023 a fevereiro de 2024. Durante esse período, desenvolvi interfaces a partir de designs no Figma utilizando HTML, CSS, JavaScript, TypeScript e React. Participei de um ambiente ágil com Scrum, aplicando boas práticas de codificação, versionamento de código e conceitos de segurança web.</p>',
    },
  ]);
}

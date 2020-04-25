import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rules',
  templateUrl: './rules.component.html',
  styleUrls: ['./rules.component.scss']
})
export class RulesComponent {

  rules: any[] = [
    {
      title: "Nutzername",
      content: "Verwende keinen anstößigen, beleidigenden oder anderweitig unangebrachte Nutzernamen",
      icon: "fa-quote-right",
    },
    {
      title: "Strecken eingeben",
      content: "AGtiv basiert auf der Ehrlichkeit und Kameradschaftlichkeit jedes einzelnen. Trage nur die Kilometer ein, die auch wirklich geradelt oder gelaufen bist.",
      icon: "fa-file-signature",
    }
  ];
}

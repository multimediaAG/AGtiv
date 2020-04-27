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
      content: "Verwende keinen anstößigen, beleidigenden oder anderweitig unangebrachte Nutzernamen.",
      icon: "fa-quote-right",
    },
    {
      title: "Passwort",
      content: "Verwende ein sicheres Passwort und gib es niemals weiter!",
      icon: "fa-lock",
    },
    {
      title: "Strecken eingeben",
      content: "AGtiv basiert auf der Ehrlichkeit und Kameradschaftlichkeit jeder und jedes Einzelnen. Trage nur die Kilometer ein, die auch wirklich geradelt, gelaufen oder skigerollert bist.",
      icon: "fa-file-signature",
    },
    {
      title: "Was zählt?",
      content: "Es zählen Strecken, die mit dem Fahrrad oder dem Skiroller zurückgelegt worden sind oder Strecken,\
      die gelaufen wurden. Alle Strecken werden in Fahrradkilometer umgerechnet, um sie vergleichen zu können.\
      Gemäß des größeren Energieaufwands werden Laufstrecken mit dem Faktor 4 und Skirollerstrecken mit dem Faktor 2.5 automatisch multipliziert.",
      icon: "fa-question",
    }
  ];
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rules',
  templateUrl: './rules.component.html',
  styleUrls: ['./rules.component.scss']
})
export class RulesComponent {

  rules: any[] = [
    {
      title: "Benutzername",
      content: "Verwende keinen anstößigen, beleidigenden oder anderweitig unangebrachten Benutzernamen. Du wirst ansonsten gesperrt!",
      icon: "fa-quote-right",
    },
    {
      title: "Passwort",
      content: "Verwende ein sicheres Passwort und gib es niemals weiter! Das Passwort muss mindestens 6 zeichen lang sein.\
      Merke Dir Deine Zugangsdaten (Benutzername und Passwort) genau.",
      icon: "fa-lock",
    },
    {
      title: "Strecken eingeben",
      content: "AGtiv basiert auf der Ehrlichkeit und Kameradschaftlichkeit jeder und jedes Einzelnen.\
      Trage nur die Kilometer ein, die auch wirklich geradelt, gelaufen oder skigerollert bist.",
      icon: "fa-file-signature",
    },
    {
      title: "Was zählt?",
      content: "Es zählen Strecken, die mit dem Fahrrad oder dem Skiroller zurückgelegt oder die gelaufen wurden.\
      Alle eingetragenen Strecken werden in \"Fahrrad-Kilometer\" umgerechnet, um sie vergleichen zu können.\
      Gemäß des größeren Energieaufwands werden Laufstrecken mit dem Faktor 4 und Skirollerstrecken mit dem Faktor 2.5 automatisch multipliziert.\
      Die sich daraus ergebenden Streckenlängen werden mathematisch auf ganze Kilometer gerundet.",
      icon: "fa-question",
    }
  ];
}

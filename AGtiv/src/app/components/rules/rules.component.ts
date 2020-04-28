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
      content: "Verwende ein sicheres Passwort und gib es niemals weiter! Das Passwort muss mindestens 6 Zeichen lang sein.\
      Merke Dir Deine Zugangsdaten (Benutzername und Passwort) genau.",
      icon: "fa-lock",
    },
    {
      title: "Strecken eingeben",
      content: "AGtiv basiert auf der Ehrlichkeit und Kameradschaftlichkeit jeder und jedes Einzelnen.\
      Trage nur die Kilometer ein, die Du auch wirklich geradelt, gelaufen oder gerollert bist.",
      icon: "fa-file-signature",
    },
    {
      title: "Was zählt?",
      content: "Du kannst alle Strecken-Kilometer eintragen, die Du mit dem Fahrrad oder dem Roller (Inliner/Skiroller) zurückgelegt hast oder die Du gelaufen bist.\
      Alle eingetragenen Strecken werden in \"Fahrrad-Kilometer\" umgerechnet, um die Leistungen vergleichen zu können.\
      Gemäß des größeren Energieaufwands werden Laufstrecken mit dem Faktor 4 und Rollerstrecken mit dem Faktor 2.5 automatisch multipliziert.\
      Die sich daraus ergebenden Streckenlängen werden mathematisch auf ganze Kilometer gerundet.",
      icon: "fa-question",
    }
  ];
}

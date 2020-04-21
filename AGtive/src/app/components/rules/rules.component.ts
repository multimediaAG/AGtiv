import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rules',
  templateUrl: './rules.component.html',
  styleUrls: ['./rules.component.scss']
})
export class RulesComponent implements OnInit {

  rules: any[] = [
    {
      title: "Nutzername",
      content: "Verwende keinen anstößigen, beleidigenden oder anderweitig unangebrachte Nutzernamen"
    },
    {
      title: "Strecken eingeben",
      content: "AGtive basiert auf der Ehrlichkeit und Kameradschaftlichkeit jedes einzelnen. Trage nur die Kilometer ein, die auch wirklich geradelt oder gelaufen bist.",
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

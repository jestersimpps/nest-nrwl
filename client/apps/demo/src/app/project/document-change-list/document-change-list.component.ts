import { Component, OnInit } from '@angular/core';
import {HistoricalChange} from "../../../../../../../shared";

@Component({
  selector: 'demo-document-change-list',
  templateUrl: './document-change-list.component.html',
  styleUrls: ['./document-change-list.component.css']
})
export class DocumentChangeListComponent implements OnInit {

  changes: HistoricalChange[] = [
    {
      author: 'bert.wijnants@gmail.com',
      date: new Date(),
      title: 'Remplace date du contrat',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus feugiat aliquet lorem eget tempus. Nullam ultricies, metus nec vulputate imperdiet, dolor leo consectetur ligula, non porta nulla tortor nec lorem. Proin hendrerit tortor at semper imperdiet. Pellentesque bibendum convallis nunc eu luctus. Ut tincidunt nunc arcu, non dapibus eros feugiat sed. Fusce placerat mauris urna, sed ornare metus gravida in. Nulla viverra lorem ac feugiat mollis. Etiam id neque vel urna ultricies tempus. Vestibulum hendrerit pretium erat, non rhoncus diam luctus sed. Sed sed fermentum nunc. Etiam ultrices odio imperdiet quam tempor lobortis. Vivamus posuere aliquam urna eu finibus. Integer sit amet risus sit amet orci pulvinar hendrerit. Donec efficitur arcu quam, ac malesuada lacus interdum nec. Quisque iaculis nibh sapien, vel suscipit erat fermentum nec.'
    },
    {
      author: 'matthias.spaers@gmail.com',
      date: new Date(),
      title: 'Correction du nom',
      description: 'Fusce velit leo, condimentum eu sapien vitae, dictum tincidunt metus. In viverra libero velit, vitae mollis diam faucibus eu. Sed a cursus neque. Suspendisse tincidunt luctus quam quis ultricies. Morbi at nisl laoreet, imperdiet ligula aliquet, pharetra felis. Suspendisse egestas ligula sed consequat feugiat. In nibh ligula, consectetur et sodales a, efficitur nec libero. Nunc bibendum dolor pulvinar, faucibus ante pharetra, lacinia arcu. Donec non vulputate felis, elementum porta risus.' },
    {
      author: 'wim.bonen@fednot.be',
      date: new Date(),
      title: 'Ajoute paragraphe 15',
      description: 'Nulla facilisis efficitur odio ac dignissim. Ut sed consectetur lectus. Nunc sit amet ex libero. Aliquam nisl nisi, auctor volutpat luctus cursus, pellentesque vitae nunc. Phasellus efficitur eros vitae consequat sagittis. Aliquam leo lacus, porta a varius vitae, iaculis in lorem. Aenean vehicula risus vel blandit convallis. Integer a condimentum nibh. Proin eu sapien enim. Vivamus convallis est sit amet mauris consequat laoreet. Fusce lobortis cursus nisi at fringilla.'
    },
  ];


  constructor() { }

  ngOnInit() {
  }

}

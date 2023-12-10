import { Component, OnInit } from '@angular/core';
import FroalaEditor from 'froala-editor';

@Component({
  selector: 'app-froala-editor',
  templateUrl: './froala-editor.component.html',
  styleUrls: ['./froala-editor.component.scss']
})
export class FroalaEditorComponent implements OnInit {
  editorContent: any;
  ngOnInit() {
    FroalaEditor.DefineIcon('alert', { NAME: 'info' });
    FroalaEditor.RegisterCommand('alert', {
      title: 'Hello',

      callback: () => {

        alert('Hello!');
      }
    });
  }
  public options: Object = {
    events: {
      'froalaEditor.contentChanged': function () {
        console.log('Content updated!');
      }
    },
    toolbarButtons: ['bold', 'italic', 'alert'],
  };


}


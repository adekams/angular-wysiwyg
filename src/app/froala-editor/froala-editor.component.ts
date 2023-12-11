import { Component, OnInit } from '@angular/core';
import FroalaEditor from 'froala-editor';

@Component({
  selector: 'app-froala-editor',
  templateUrl: './froala-editor.component.html',
  styleUrls: ['./froala-editor.component.scss']
})
export class FroalaEditorComponent implements OnInit {
  editorContent: any = '';
  imgObj: any;
  ngOnInit() {
    FroalaEditor.DefineIcon('alert', { NAME: 'info' });
    FroalaEditor.RegisterCommand('alert', {
      title: 'Hello',
      // focused: false,
      // undo: true,
      // refreshAfterCallback: false,

      callback: () => {
        alert('Hello! This is an alert');
      }
    });
  }
  public options: Object = {
    events: {
      'froalaEditor.contentChanged': function () {
        console.log('Content updated!');
      }
    },
    toolbarButtons: ['bold', 'italic', 'underline', 'strikeThrough', 'insertTable', 'insertImage', 'insertLink', 'orderedList', '|', 'underline', 'paragraphFormat', 'align', 'undo', 'redo', 'html'],
    // toolbarButtonsXS: [
    //   'bold', 'italic', 'underline', 'strikeThrough', 'table', '|', 'paragraphFormat', 'align', 'undo', 'redo', 'html'
    // ],
    // toolbarButtonsSM: [
    //   'bold', 'italic', 'underline', 'strikeThrough', 'table', '|', 'paragraphFormat', 'align', 'undo', 'redo', 'html'
    // ],
    // toolbarButtonsMD: [
    //   'bold', 'italic', 'underline', 'strikeThrough', 'table', '|', 'paragraphFormat', 'align', 'undo', 'redo', 'html'
    // ],

  };


}


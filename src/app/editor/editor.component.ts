import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Message, MessagesService, Errors } from '../core';

@Component({
  selector: 'app-editor-page',
  templateUrl: './editor.component.html',
})
export class EditorComponent implements OnInit {
  message: Message = {} as Message;
  messageForm: FormGroup;
  tagField = new FormControl();
  errors: Errors;
  isSubmitting = false;

  constructor(
    private messageService: MessagesService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder
  ) {
    // use the FormBuilder to create a form group
    this.messageForm = this.fb.group({
      title: '',
      description: '',
      body: '',
    });

    // Initialized tagList as empty array
    this.message.tagList = [];

    // Optional: subscribe to value changes on the form
    // this.messageForm.valueChanges.subscribe(value => this.updateMessage(value));
  }

  ngOnInit() {
    // If there's an message prefetched, load it
    this.route.data.subscribe((data: { message: Message }) => {
      if (data.message) {
        this.message = data.message;
        this.messageForm.patchValue(data.message);
      }
    });
  }

  addTag() {
    // retrieve tag control
    const tag = this.tagField.value;
    // only add tag if it does not exist yet
    if (this.message.tagList.indexOf(tag) < 0) {
      this.message.tagList.push(tag);
    }
    // clear the input
    this.tagField.reset('');
  }

  removeTag(tagName: string) {
    this.message.tagList = this.message.tagList.filter((tag) => tag !== tagName);
  }

  submitForm() {
    this.isSubmitting = true;

    // update the model
    this.updateMessage(this.messageForm.value);

    // post the changes
    this.messageService.save(this.message).subscribe(
      (message) => this.router.navigateByUrl('/message/' + message.slug),
      (err) => {
        this.errors = err;
        this.isSubmitting = false;
      }
    );
  }

  updateMessage(values: Object) {
    Object.assign(this.message, values);
  }
}

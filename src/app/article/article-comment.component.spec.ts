import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { of } from 'rxjs';

import { ArticleCommentComponent } from './article-comment.component';
import { Comment, Profile, User, UserService } from '../core';

function author(username: string): Profile {
  return { username, bio: '', image: '', following: false };
}

function commentFixture(): Comment {
  return {
    id: 1,
    body: 'A comment body',
    createdAt: '2026-01-01T00:00:00.000Z',
    author: author('writer')
  };
}

async function createFixture(currentUser: Partial<User>): Promise<ComponentFixture<ArticleCommentComponent>> {
  await TestBed.configureTestingModule({
    declarations: [ArticleCommentComponent],
    providers: [{ provide: UserService, useValue: { currentUser: of(currentUser as User) } }],
    schemas: [NO_ERRORS_SCHEMA]
  }).compileComponents();

  const fixture = TestBed.createComponent(ArticleCommentComponent);
  fixture.componentRef.setInput('comment', commentFixture());
  fixture.detectChanges();

  return fixture;
}

describe('ArticleCommentComponent', () => {
  afterEach(() => TestBed.resetTestingModule());

  it('renders the comment it is given', async () => {
    const fixture = await createFixture({ username: 'someone-else' });

    expect(fixture.nativeElement.textContent).toContain('A comment body');
    expect(fixture.nativeElement.textContent).toContain('writer');
  });

  it('hides the delete button for another user', async () => {
    const fixture = await createFixture({ username: 'someone-else' });

    expect(fixture.componentInstance.canModify()).toBe(false);
    expect(fixture.nativeElement.querySelector('button').hidden).toBe(true);
  });

  it('offers the delete button to the author and emits on click', async () => {
    const fixture = await createFixture({ username: 'writer' });
    const emitted: boolean[] = [];
    fixture.componentInstance.deleteComment.subscribe(value => emitted.push(value));

    expect(fixture.componentInstance.canModify()).toBe(true);
    expect(fixture.nativeElement.querySelector('button').hidden).toBe(false);

    fixture.nativeElement.querySelector('button').click();

    expect(emitted).toEqual([true]);
  });
});

---
layout: article.njk
tags: ["articles", "article", "tech"]
title: Utility of unit tests
date: 2022-05-08
imageUrl: unit-test-usability.jpg
blurb: What did the unit tests ever do for us?
---

Among the various motivations for writing unit tests, I would hope that future utility would be high on the list for most developers.

We devote precious and scarce time to writing tests, so it would be good if we could maximize the value we gain from them over time, aside from the initial value from the process of writing them.

In this article I want to offer three examples of how existing unit tests can offer value long after they are written.

Hopefully these examples will help motivate you to write unit tests and to consider the value of your test suite.

## One: Visualizing the impact change

This example came to me from an interesting recent conversation in code review comments. My colleague asked me why I had re-used a mock variable in a particular unit test. I said that this would make the code more concise and avoid the test breaking when the that mock variable changed. My colleague retorted that we might _want_ the test to break when we change that string, as we might want to see all the places in code which that change would impact, so we could inspect all of them to make sure there wasn't any undesirable impact. This is traditionally known as "impact analysis" - it means searching through a code-base to see what impact a particular change would have.

So here we have an interesting and practical usage of existing unit tests - by their breakage, we can identify which parts of our code-base are going to be impacted by our change.

This doesn't have to involve only logic. We can make any unit test in the whole system work as a kind of impact visualizer, simply by setting it up so that it fails whenever the impact-causing change is made.

For example, suppose we declare our application name in a global variable:

```
export const APPLICATION_NAME = 'Dominos';
```

We then go on to re-use it across several places in the app, including a settings link:

```
import { APPLICATION_NAME } from 'app.const';

...

<a href="/settings">
  { APPLICATION_NAME } settings
</a>
```

If we want to trigger a test failure pointing at our settings link whenever that string changes, we can hard-code the value into our unit-test:

```
describe('AppSettings' , () => {
  ...
  it('renders application name correctly', async () => {
    await render();

    expect(screen.findByText('Dominos settings')).toBeInTheDocument();
  });
});
```

Now, upon changing the app name, the test breakages will help us to see exactly where the change will be felt:

## Two:

## Example three: ensuring a change doesn't break

## Conclusion

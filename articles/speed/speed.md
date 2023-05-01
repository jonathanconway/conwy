---
layout: article.njk
tags: ["articles", "article", "tech"]
title: Speeding up development
date: 2023-02-11
imageUrl: speed.jpg
blurb: Some thoughts on getting to production faster
---

You've probably noticed that a lot of the material targeted at developers focusses on topics such as code quality, domain-driven design, product engineering, architecture, etc.

While these are good and fine topics, which do move the industry forward, many of us will find that in our day-to-day work, these things aren't consistently valued and aren't necessarily going to achieve the results we want.

A common need, expressed by employers/clients (in great or few words) is:

**Speed of delivery**

There are many benefits to delivering working software in a shorter timeframe:

- Our department achieves a better KPI
- Experimentation and response to change is faster
- Team and management morale is higher
- We have more to show senior management
- We have more to show future employers

Speed is an important quality of a good developer. Though not talked about, it is one of those "silent criteria" that hiring managers have in mind, but might not openly express, when choosing a candidate.

So in this article I want to share a few ideas, gleaned over the years, which have helped me to deliver work faster. They might help you to deliver good work faster and knowing them might also give you a boost during the interview process.

Here is the list:

- Identifying and addressing blockers early on
- Getting clear on release/deployment procedures
- Connecting with people and systems early on
- Planning the whole solution
- Using mock data to unblock effort and uncover amiguities
- Doing less
- Adding configurability
- Making smart assumptions that are easy to correct
- Getting clear on testing
- Optimising changes to be short and readable
- Deferring or time-boxing complex and ambiguous work
- Dividing the work well
- Focussing on the critical path
- Using interfaces to simplify and contain change
- Delegating work
- Maximising debugability of code
- Speeding up iteration with unit tests and mocks
- Testing all aspects of a feature together at once
- Use multiple local copies of the code-base for quick switching
- Asking the right people for help
- Getting input from the right stakeholders
- Documenting decisions publicly
- Keep a general checklist for all items you work on

This may look to you like grab-bag of disconnected ideas. I would invite you to think of it as a toolbox of ideas – by knowing which tools are available to you, you can choose zero more of the best tools for your particular situation.

Allow me to summarise each of these.

## Identifying and addressing blockers early on

The path from your local dev branch to production is fraught with unknown-unknowns. Unexpected blockers that crop up, which you weren't able to predict. A good way to prevent these from de-railing your timelines is to learn about them and try to address them as early as possible.

<figure>
  <img src="https://www.freecodecamp.org/news/content/images/2019/08/0-19tCoAPuacAtxmSy.png" width="50%" />
  <figcaption>
    2x2 quadrant: known-unknown, known-known, unknown-unknown, unknown-known.<br />
    Source:
    <a href="https://www.freecodecamp.org/news/how-to-discover-your-unknown-knowns/">
      https://www.freecodecamp.org/news/how-to-discover-your-unknown-knowns
    </a>
  </figcaption>
</figure>

If you can get a change - even a small change - into production (or as close as possible, e.g. a test environment) as soon as possible, then in the process you will encounter the blockers you didn't know about, become more familiar with them, and hopefully find out how to address them.

(Better yet, you can use knowledge to inform a general checklist of items which always need to be actioned. If followed, that checklist can increase the likelihood of a successful build and deployment.)

I like to visualise the process of uncovering unknowns as similar to playing a real-time strategy game such as *Age of Empires*, where, through repeated expeditions, we progressively reveal unexplored terrain and can see more of the map.

<figure>
  <img src="https://media.moddb.com/images/games/1/13/12154/Screen20.jpg" width="50%" />
  <figcaption>
    Screenshot of an Age of Empires game, with unexplored territory shrouded.<br />
    Source:
    <a href="https://www.moddb.com/games/age-of-empires-rise-of-rome/images/discovery">
      https://www.moddb.com/games/age-of-empires-rise-of-rome/images/discovery
    </a>
  </figcaption>
</figure>

For example, in one of my recent projects, it was discovered that, for anything to go live, it must be approved by a certain manager and merged to the main branch 3 days in advance. This was not communicated to me or documented anywhere, so there was no way I could have known about it in advance. The only way I could have known about it was to ***actually try to release something to production***, and then be informed of the necessary approvals and cut-off date. If I had tried to get some small change into production earlier, then I would have learned about this earlier on and possibly released my work much sooner.

One more pro-active approach to take is to begin preparing for tasks related to your code-base(s) or system(s) before you begin working on those tasks.

## Solution design

Solution design, ahead of commencing development work, can help to uncover some of the uncertainties mentioned in the previous section as well as a grab-bag of others.

Solution design needn't be complicated, lengthy or bureaucratic. In fact, you could time-box it to just an hour!

You likely already have all the tools to create a solution design on your own. A pen & paper, text editor and/or simple diagramming software such as yEd or Mermaid are typically sufficient.

Here are some activities, one or more of which you might perform, depending on the situation:

- Listing the entities or "nouns" that the solution must deal with
- Drawing an Actor diagram, representing the interactions between user and system which you want to enable
- Drawing an execution flow diagram, representing how you plan new code to execute at runtime
- Some simple UML, maybe just 3 or 4 figures, representing what new structures you plan to build and how they will fit into the existing code base (I like to explicitly label figures as "new" or "old" so this is very clear)

While this activity can be done solo, you can, on strategic occasions, share pieces of it with various team members or stakeholders, using it to communicate and reach a shared understanding.

Some people, engaging with Agile and SCRUM literature, get the false impression that, because we favour "responding to change over following a plan", therefore no planning is necessary. There is also the common adage that "no plan survives contact with the enemy".

However, planning can be very useful and can help to speed up delivery even if the plan is imperfect or if no one ever sees it. The act of trying to make a plan can expose the very real gaps in your knowledge, telling you which questions you need answers for.

Also, if you execute against a faulty plan, at least you have made progress toward it. With just a few tweaks to the plan, much of the initial effort need not be lost.

For example, suppose on the basis of a faulty plan you construct a database table which uses the wrong data type for one of its fields. On discovering this error subsequently, it shouldn't be earth-shakingly difficult to simply change the data type of that one field. The good thing is that you managed to create the table at all, resolving the difficulties and ambiguities this might have involved (e.g. figuring out how to write a database migration, who owns that database so you know who to ask to approve the change, etc.) 

Clearly the outcome was better when you had an imperfect plan and followed it, while responding to change, than if you had proceeded without any plan at all and perhaps built a totally wrong table or none at all.

There are some other less tangible benefits to planning. You get a feeling of confidence and a sense of control over yourself and your environment. In meetings or one-on-one conversations, you speak more readily. Your communications are more clear, because you are thinking in a structured way about the problem. Your questions are easier for others to answer, even if they are based on mistaken assumptions, because at least those assumptions are clear, and therefore, easier for others to correct.

Don't let Agile or other methodologies distract you from plain old "common sense" such as having a plan and sticking to it!

## Using mock data to unblock effort and uncover ambiguities

Do you feel blocked because your work depends on an as-yet-not-working separate system or a Backend maintained by a different developer?

I have a solution for you: mocks!

These can take various forms, from inline hard-coded mock data to API mocks (using a library such as [MSW](https://mswjs.io/)) to test accounts.

If you can build 90% of the solution using mocks, with only a little effort left to remove the mocks and switch over to the real data (maybe a little tidying up as well), then you can impress stakeholders significantly more than if you had waited for real data to become available.

The mocked solution should be demoable, either visually or some other way, so that you can readily publicise your achievement. This publicisation can be done through screenshots, recordings or live demos in meetings.

## Doing less

I'm frequently surprised by the extent to which seemingly "essential" complexity can be questioned and eliminated.

* Does it really need to be dynamic, or would a hard-coded solution suffice?
* Does it really need to cater to every possible input, or would catering to the 80% of most likely or common inputs suffice?
* Does it really need to involve a highly complex, elaborate structure, or could a much simpler structure suffice?

If you can aim to "satisfice", i.e. deliver something that is satisfies enough to move forward with, you can deliver something much simpler much earlier. 

## Making smart assumptions that are easy to correct

An assumption, though wrong, can be reasonable. It's reasonable to assume that the "Name" column of a table of employees should contain First name + space + Last name. Using reasonable assumptions (equivalent to, in the world of DevOps, "sensible defaults"), you can move forward and maintain momentum in your work, rather than getting stuck on overly fussy details that don't really matter in the big scheme of things.

Who cares if you accidentally used the wrong icon (because the designer couldn't make up their mind) or mis-formatted one column in a table (because the BA never got back to you)? As long as you delivered on the overall requirement, most of the stakeholders will be mostly happy.

It's important to remember that we're building solutions for *people* not machines (though they do need to run *on* machines) – the important thing is to maximise the outcome for the people, which includes not allowing minor details to delay or risk the delivery.

The 80/20 rule can be a useful heuristic - when 100% is not possible, aim to keep at least 80% of the people happy, deliver 80% of the requirements, close 80% of the tasks, etc.

Even better, if you need to make an assumption, make it easy to correct by extracting it to a constant or making it a configuration setting.

## Getting clear on testing

A question I often ask myself, both before and during development, is: what kind of test(s) would prove that this piece of functionality works correctly and the task has been accomplished?

Thinking this way naturally leads to a set of testing steps - steps which, if followed, would test and verify that the system worked correctly as expected.

These testing steps can be a valuable tool for determining what needs to be actually built.

For example, if I was building a login form, I would know that it worked correctly if it logged the user in after valid credentials were submitted. This tells me that I probably need to check the credentials entered against the database of users.

## Getting clear on release/deployment procedures

## Optimising pull requests to be readable

We've all heard the advice to maximise code readability by keeping modules short, using human-readable names, etc. However this advice isn't always the best, especially if we have to work with a lot of code written by others and when we are dependent on others to review and approve our pull requests before going live.

One of the surest ways to slow down delivery is to perform large refactoring projects which result in complex pull requests that are difficult for other developers to read and reason about, thus delaying approvals and merging. The less reviewers understand your changes, the slower they will be to approve your changes.

Conversely, one of the surest ways to speed up delivery is to ***optimise pull requests for readability*** so that they contain the minimal amount of changes and are as easy-to-review as possible.

You want to ***minimise your change surface-area***, keeping the code as much the same as possible while keeping your changes as small and simple as possible.

A technique that works well with the above strategy is ***chunking of new code***. Whenever adding new code, try to keep it together in contiguous groups of lines, or even better, put it all in a new file. That way you have more freedom over how you structure the code while simultaneously maximising the readability of your pull request. When your changes show up as chunks of "added" lines and files in a pull request, they put less cognitive load on the code reviewer. The reviewer merely has to review the added code, as opposed to having to compare the previous code with the replacement code, which they would have to do if you had mixed your changes in with the old code.

## Deferring or time-boxing complex and ambiguous work

## Dividing the work well

## Focussing on the critical path













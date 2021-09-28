---
layout: article.njk
tags: ["article", "tech"]
title: Diagramming Typescript
date: 2022-01-02
imageUrl: diagramming-ts.jpg
blurb: How might we tweak the familiar UML "class diagrams" to instead model Typescript code?
---

As the practice of front-end development grows and evolves, front-end developers find themselves working with increasingly complex problem domains, requirements and code-bases. This necessitates increasing usage of solution design and planning tools, such as [wireframes](https://en.wikipedia.org/wiki/Website_wireframe), [component diagrams](https://reactjs.org/docs/thinking-in-react.html#step-1-break-the-ui-into-a-component-hierarchy), [user stories](https://www.martinfowler.com/bliki/UserStory.html), etc.

In recent work on large, complex Typescript code-bases I've found myself doing a significant amount of upfront solution design, planning modifications or additions to the code by way of high-level diagrams.

In this article I want to share a 'tweaked' form of UML that I've been using in solution designs on Typescript code-bases.

But let's first review the utility of diagrams and UML.

## Why diagrams?

To motivate this article, I want to review the main uses and benefits of diagrams as I see it.

Diagrams have the following features, distinct from either code or documentation:

- _Partial_ - diagrams can "sketch" some parts of code while omitting others
- _High-level_ - diagrams can depict high-level components while omitting low-level implementation details
- _Spatial_ - diagrams are in 2D space, enabling us to better visualise the parts and how they connect to eachother

By virtue of these features, diagrams offer certain unique uses and benefits at different stages of the software lifecycle.

- Solution design
- Planning complex changes
- Documentation

### Solution design

Solution design helps us to conceive our solutions before implementing them. We can begin to assemble the pieces of the solution and envisage how they will interact with eachother in advance of writing any code. This helps us to clarify our work, avoid costly mistakes and rework and come up with better time estimates. The benefits are multiplied when solution design is shared between multiple team members and improved based on their feedback.

Diagramming is an excellent way to both develop and communicate a solution design. Diagrams, which don't need to be compiled, can be built partially, creating a kind of "code sketch" that communicates software design at a high level while omitting details. Diagrams are laid out spatially, allowing us to organise our thinking outside the constraints of the file system or compiler.

<small>Note 1: In some organisations multiple stakeholders may need to approve a solution – from product owners to designers to security specialists. In these cases it's even more beneficial to develop solution designs and share them with the stakeholders. The stakeholders can then have an opportunity to identify issues and risks before implementation commences. They can co-design the solution with developers, shaping it in beneficial ways before implementation begins.</small>

<small>Note 2: There is a culture in some development teams of avoiding solution design, thinking it is unnecessary and even to be avoided, since it is part of undesirable "big upfront planning" or "waterfall" methodology. The idea is that "agile" is a new and better way of working and, as such, developers should begin coding as soon as possible with minimal planning and preparation ("MVP"). My thinking goes against this, but addressing it in-depth is beyond the scope of this article. But to summarise: if you carefully review the agile literature, it is very rare for it to discourage planning, big picture thinking, solution design or architecture. In fact, some of the most popular agile practitioners, such as Bob Martin and Martin Fowler, have written lengthy books on both architecture and UML. Thus it is apparent that agile is broadly compatible with solution design and planning.</small>

### Planning complex changes

As our software grows in multiple directions (code size and complexity, users, features, etc.) the complexity of making changes increases. Any change, from renaming a field to adding cross-cutting functionality such as monitoring, can involve changes to many components across the code-base. We may need to envisage the impacts of these changes and carefully plan them out, paying regard to constraints such as time, system resources, performance, etc.

This is where diagramming can come in handy. As we analyse the code directly, we can also begin to sketch out a partial model of the code, focussing on just the components that will need to be changed. We can then add our changes to this model and use annotations, dashed rectangles or whitespace to mark our which parts are changing.

### Documentation

Diagrams can form a useful part of documentation. They can be added to wiki pages, task trackers and pull requests, to help developers and other team members understand the structure of the code.

We can create a diagram only depicts once slice of the code-base, and omit implementation detail. This helps when documenting a cross-cutting aspect of the code-base.

For example, we might have one page in the wiki dedicated to the topic of 'SMS verification'. That page could detail the systems and processes involved in sending an SMS verification message. It could include a diagram depicting only the parts of our code involved in SMS verification and how they connect to eachother, omitting parts that aren't directly involved in SMS verification.

## Background on UML

UML is a widely used diagramming language for depicting object-oriented code structures. Normally used with strongly-typed, class-based programming languages, such as Java and C#, it focuses on representing the public interfaces of classes, interfaces and other structures, inheritance relationships between classes (generalisation, realisation, etc.) and relationships between objects generated by classes (association, aggregation, composition).

The UML standard covers a range of diagrams, most of which can be readily applied to Typescript and/or front-end projects with practically no tweaking.

Notice, however, that UML "class diagrams" (as the name suggests) are focussed on depicting classes and objects. Most Typescript code-bases (especially front-end) are much more focussed on functions and types. This is in good part due to the functional style of programming that predominates in front-end languages (Javascript), frameworks (React), libraries (Redux) and tooling.

This presents a challenge: there is a dissonance between the class focussed world of UML and the function and type focussed world of Typescript. It seems like we need to tweak UML in order to use it effectively in a Typescript context.

Happily, as we will see, this is all quite doable. In fact, "Typescript UML" can be realised as a subset of UML without significantly altering the language.

## Applying UML to Typescript

The first thing to note is that with Typescript we need to model functions and types – structures which aren't traditionally supported by UML.

UML already allows for extensibility, via the "stereotype" pattern, annotations and on connector lines. We can carefully apply use these features to depict important Typescript structures such as types and functions, while preserving the overall idioms of UML, to keep the diagrams clean, consistent and (if needed) broadly accessible to non-Typescript developers.

## Interfaces, types and enums

Interfaces and enums, which are also present in class-based languages, translate immediately over to UML.

[![](https://mermaid.ink/img/eyJjb2RlIjoiY2xhc3NEaWFncmFtXG4gIGNsYXNzIFVzZXJUeXBlIHtcbiAgICA8PEVudW0-PlxuICAgICtQaWxvdFxuICAgICtDcmV3XG4gIH1cblxuICBjbGFzcyBCYXNlVXNlciB7XG4gICAgPDxJbnRlcmZhY2U-PlxuICAgICt0eXBlOiBVc2VyVHlwZVxuICAgICtmaXJzdE5hbWU6IHN0cmluZ1xuICAgICtsYXN0TmFtZTogc3RyaW5nXG4gICAgK2VtYWlsOiBzdHJpbmdcbiAgfVxuICBCYXNlVXNlciAuLj4gVXNlclR5cGUiLCJtZXJtYWlkIjp7InRoZW1lIjoiZGVmYXVsdCJ9LCJ1cGRhdGVFZGl0b3IiOmZhbHNlLCJhdXRvU3luYyI6dHJ1ZSwidXBkYXRlRGlhZ3JhbSI6ZmFsc2V9)](https://mermaid.live/edit#eyJjb2RlIjoiY2xhc3NEaWFncmFtXG4gIGNsYXNzIFVzZXJUeXBlIHtcbiAgICA8PEVudW0-PlxuICAgICtQaWxvdFxuICAgICtDcmV3XG4gIH1cblxuICBjbGFzcyBCYXNlVXNlciB7XG4gICAgPDxJbnRlcmZhY2U-PlxuICAgICt0eXBlOiBVc2VyVHlwZVxuICAgICtmaXJzdE5hbWU6IHN0cmluZ1xuICAgICtsYXN0TmFtZTogc3RyaW5nXG4gICAgK2VtYWlsOiBzdHJpbmdcbiAgfVxuICBCYXNlVXNlciAuLj4gVXNlclR5cGUiLCJtZXJtYWlkIjoie1xuICBcInRoZW1lXCI6IFwiZGVmYXVsdFwiXG59IiwidXBkYXRlRWRpdG9yIjpmYWxzZSwiYXV0b1N5bmMiOnRydWUsInVwZGF0ZURpYWdyYW0iOmZhbHNlfQ)

```typescript
enum UserType {
  Pilot = "Pilot",
  Crew = "Crew",
}

interface BaseUser {
  id: string;
  type: UserType;
  firstName: string;
  lastName: string;
  email: string;
}
```

Types are a little more tricky. A type might simply be declared equivalent to another structure – such as an interface or another type. Or it might also be a composition of other structures, such as a conditional type or mapped type.

How can we accurately represent our types diagrammatically without overburdening our diagrams with code-like detail?

My approach here is to simply lay out all the types involved and depict their relationships to eachother without necessarily including logical constraints or finer-grained details such as mapped properties. Where such details are crucial, they can be placed in a nearby 'note' element (already a feature of standard UML) and/or, as in the case of mapped properties, simply included in the type's first compartment.

[![](https://mermaid.ink/img/eyJjb2RlIjoiY2xhc3NEaWFncmFtXG4gIGNsYXNzIFVzZXJUeXBlIHtcbiAgICA8PEVudW0-PlxuICAgICtQaWxvdFxuICAgICtDcmV3XG4gIH1cblxuICBjbGFzcyBCYXNlVXNlciB7XG4gICAgPDxJbnRlcmZhY2U-PlxuICAgICt0eXBlOiBVc2VyVHlwZVxuICAgICtmaXJzdE5hbWU6IHN0cmluZ1xuICAgICtsYXN0TmFtZTogc3RyaW5nXG4gICAgK2VtYWlsOiBzdHJpbmdcbiAgfVxuICBCYXNlVXNlciAuLj4gVXNlclR5cGVcblxuICBjbGFzcyBQaWxvdCB7XG4gICAgPDxUeXBlPj5cbiAgICArdHlwZTogVXNlclR5cGUuUGlsb3RcbiAgICArbGljZW5jZU51bWJlcjogUGlsb3RMaWNlbmNlTnVtYmVyXG4gICAgK3llYXJzRXhwZXJpZW5jZTogbnVtYmVyXG4gIH1cbiAgUGlsb3QgLS18PiBCYXNlVXNlclxuXG4gIGNsYXNzIENyZXcge1xuICAgIDw8VHlwZT4-XG4gICAgK3R5cGU6IFVzZXJUeXBlLkNyZXc7XG4gICAgK2NyZXdDb2RlOiBzdHJpbmc7XG4gIH1cbiAgQ3JldyAtLXw-IEJhc2VVc2VyXG5cbiAgY2xhc3MgVXNlciB7XG4gICAgPDxUeXBlPj5cbiAgICBQaWxvdCB8IENyZXdcbiAgfVxuICBVc2VyIC0tfD4gUGlsb3RcbiAgVXNlciAtLXw-IENyZXdcblxuICBjbGFzcyBVc2VyQWNjb3VudEluZm8ge1xuICAgIDw8VHlwZT4-XG4gICAgK2ZpcnN0TmFtZTogc3RyaW5nXG4gICAgK2xhc3ROYW1lOiBzdHJpbmdcbiAgICArZW1haWw6IHN0cmluZ1xuICB9XG4gIFVzZXJBY2NvdW50SW5mbyAtLXw-IEJhc2VVc2VyOiAocGljaylcbiIsIm1lcm1haWQiOnsidGhlbWUiOiJkZWZhdWx0In0sInVwZGF0ZUVkaXRvciI6ZmFsc2UsImF1dG9TeW5jIjp0cnVlLCJ1cGRhdGVEaWFncmFtIjpmYWxzZX0)](https://mermaid.live/edit/#eyJjb2RlIjoiY2xhc3NEaWFncmFtXG4gIGNsYXNzIFVzZXJUeXBlIHtcbiAgICA8PEVudW0-PlxuICAgICtQaWxvdFxuICAgICtDcmV3XG4gIH1cblxuICBjbGFzcyBCYXNlVXNlciB7XG4gICAgPDxJbnRlcmZhY2U-PlxuICAgICt0eXBlOiBVc2VyVHlwZVxuICAgICtmaXJzdE5hbWU6IHN0cmluZ1xuICAgICtsYXN0TmFtZTogc3RyaW5nXG4gICAgK2VtYWlsOiBzdHJpbmdcbiAgfVxuICBCYXNlVXNlciAuLj4gVXNlclR5cGVcblxuICBjbGFzcyBQaWxvdCB7XG4gICAgPDxUeXBlPj5cbiAgICArdHlwZTogVXNlclR5cGUuUGlsb3RcbiAgICArbGljZW5jZU51bWJlcjogUGlsb3RMaWNlbmNlTnVtYmVyXG4gICAgK3llYXJzRXhwZXJpZW5jZTogbnVtYmVyXG4gIH1cbiAgUGlsb3QgLS18PiBCYXNlVXNlclxuXG4gIGNsYXNzIENyZXcge1xuICAgIDw8VHlwZT4-XG4gICAgK3R5cGU6IFVzZXJUeXBlLkNyZXc7XG4gICAgK2NyZXdDb2RlOiBzdHJpbmc7XG4gIH1cbiAgQ3JldyAtLXw-IEJhc2VVc2VyXG5cbiAgY2xhc3MgVXNlciB7XG4gICAgPDxUeXBlPj5cbiAgICBQaWxvdCB8IENyZXdcbiAgfVxuICBVc2VyIC0tfD4gUGlsb3RcbiAgVXNlciAtLXw-IENyZXdcblxuICBjbGFzcyBVc2VyQWNjb3VudEluZm8ge1xuICAgIDw8VHlwZT4-XG4gICAgK2ZpcnN0TmFtZTogc3RyaW5nXG4gICAgK2xhc3ROYW1lOiBzdHJpbmdcbiAgICArZW1haWw6IHN0cmluZ1xuICB9XG4gIFVzZXJBY2NvdW50SW5mbyAtLXw-IEJhc2VVc2VyOiAocGljaylcbiIsIm1lcm1haWQiOiJ7XG4gIFwidGhlbWVcIjogXCJkZWZhdWx0XCJcbn0iLCJ1cGRhdGVFZGl0b3IiOmZhbHNlLCJhdXRvU3luYyI6dHJ1ZSwidXBkYXRlRGlhZ3JhbSI6ZmFsc2V9)

```typescript
type PilotLicenceNumber = string;

type Pilot = BaseUser & {
  type: UserType.Pilot;
  licenceNumber: PilotLicenceNumber;
  yearsExperience: number;
};

type Crew = BaseUser & {
  type: UserType.Crew;
  crewCode: string;
};

type User = Pilot | Crew;

type UserAccountInfo = Pick<BaseUser, "firstName" | "lastName" | "email">;
```

I'm not sure if this is ideal, but it seems a reasonably pragmatic approach. Note that UML allows us to depict the code partially, not necessarily exhaustively.

We can also depict _associations_ between different interfaces/types in the same way as regular UML class diagrams. In this example, we depict a `Flight` interface which aggregates `Crew` and `Pilot` members, along with the cardinality of the relationship.

[![](https://mermaid.ink/img/eyJjb2RlIjoiY2xhc3NEaWFncmFtXG4gIGNsYXNzIFBpbG90IHtcbiAgICA8PFR5cGU-PlxuICAgICt0eXBlOiBVc2VyVHlwZS5QaWxvdFxuICAgICtsaWNlbmNlTnVtYmVyOiBQaWxvdExpY2VuY2VOdW1iZXJcbiAgICAreWVhcnNFeHBlcmllbmNlOiBudW1iZXJcbiAgfVxuXG4gIGNsYXNzIENyZXcge1xuICAgIDw8VHlwZT4-XG4gICAgK3R5cGU6IFVzZXJUeXBlLkNyZXc7XG4gICAgK2NyZXdDb2RlOiBzdHJpbmc7XG4gIH1cblxuICBjbGFzcyBGbGlnaHQge1xuICAgIDw8SW50ZXJmYWNlPj5cbiAgICArZmxpZ2h0TnVtYmVyOiBzdHJpbmdcbiAgICArY3Jld3M6IENyZXdbXVxuICAgICtwaWxvdHM6IFBpbG90W11cbiAgfVxuICBGbGlnaHQgXCIwXCIgby0tPiBcIm5cIiBDcmV3IDogY3Jld3NcbiAgRmxpZ2h0IFwiMFwiIG8tLT4gXCJuXCIgUGlsb3QgOiBwaWxvdHMiLCJtZXJtYWlkIjp7InRoZW1lIjoiZGVmYXVsdCJ9LCJ1cGRhdGVFZGl0b3IiOmZhbHNlLCJhdXRvU3luYyI6dHJ1ZSwidXBkYXRlRGlhZ3JhbSI6ZmFsc2V9)](https://mermaid.live/edit/#eyJjb2RlIjoiY2xhc3NEaWFncmFtXG4gIGNsYXNzIFBpbG90IHtcbiAgICA8PFR5cGU-PlxuICAgICt0eXBlOiBVc2VyVHlwZS5QaWxvdFxuICAgICtsaWNlbmNlTnVtYmVyOiBQaWxvdExpY2VuY2VOdW1iZXJcbiAgICAreWVhcnNFeHBlcmllbmNlOiBudW1iZXJcbiAgfVxuXG4gIGNsYXNzIENyZXcge1xuICAgIDw8VHlwZT4-XG4gICAgK3R5cGU6IFVzZXJUeXBlLkNyZXc7XG4gICAgK2NyZXdDb2RlOiBzdHJpbmc7XG4gIH1cblxuICBjbGFzcyBGbGlnaHQge1xuICAgIDw8SW50ZXJmYWNlPj5cbiAgICArZmxpZ2h0TnVtYmVyOiBzdHJpbmdcbiAgICArY3Jld3M6IENyZXdbXVxuICAgICtwaWxvdHM6IFBpbG90W11cbiAgfVxuICBGbGlnaHQgXCIwXCIgby0tPiBcIm5cIiBDcmV3IDogY3Jld3NcbiAgRmxpZ2h0IFwiMFwiIG8tLT4gXCJuXCIgUGlsb3QgOiBwaWxvdHMiLCJtZXJtYWlkIjoie1xuICBcInRoZW1lXCI6IFwiZGVmYXVsdFwiXG59IiwidXBkYXRlRWRpdG9yIjpmYWxzZSwiYXV0b1N5bmMiOnRydWUsInVwZGF0ZURpYWdyYW0iOmZhbHNlfQ)

```typescript
interface Flight {
  flightNumber: string;
  crews: Crew[];
  pilots: Pilot[];
}
```

<br />

## Functions

As the name suggests, UML "class diagrams" are normally oriented toward depicting classes, which are treated as the main building blocks of class-based programs.

Typescript programs however, especially on the front-end, tend to more heavily emphasise functions. Functions are treated as "first class citizens", meaning that they make up important structural elements of the program, and are not merely an implementation detail.

Nevertheless, we can take UML's "box with two compartments and a title bar" and re-purpose it for diagramming Typescript functions.

The public interface of a Typescript function primarily consists of its parameters and return type. We can repurpose the first compartment of our box to depict the parameters passed in to the function. Since a function has no publicly accessible "instance" members, there's no need to represent them at all. The lower compartment can contain private variables held in scope of the function, which, as with private members of a class, aren't accessible from outside.

[![](https://mermaid.ink/img/eyJjb2RlIjoiY2xhc3NEaWFncmFtXG4gIGNsYXNzIGlzVmFsaWRVc2VyIHtcbiAgICA8PEZ1bmN0aW9uPj5cbiAgICArdXNlcjogVXNlclxuICB9XG4gIGlzVmFsaWRVc2VyIC4uPiBVc2VyIDogdXNlclxuICBpc1ZhbGlkVXNlciAuLj4gaXNWYWxpZFBpbG90TGljZW5jZU51bWJlciA6IChjYWxscylcblxuICBjbGFzcyBpc1ZhbGlkUGlsb3RMaWNlbmNlTnVtYmVyIHtcbiAgICA8PEZ1bmN0aW9uPj5cbiAgICArbGljZW5jZU51bWJlcjogUGlsb3RMaWNlbmNlTnVtYmVyXG4gIH1cbiAgaXNWYWxpZFBpbG90TGljZW5jZU51bWJlciAuLj4gUGlsb3RMaWNlbmNlTnVtYmVyIDogbGljZW5jZU51bWJlclxuXG4iLCJtZXJtYWlkIjp7InRoZW1lIjoiZGVmYXVsdCJ9LCJ1cGRhdGVFZGl0b3IiOmZhbHNlLCJhdXRvU3luYyI6dHJ1ZSwidXBkYXRlRGlhZ3JhbSI6ZmFsc2V9)](https://mermaid.live/edit#eyJjb2RlIjoiY2xhc3NEaWFncmFtXG4gIGNsYXNzIGlzVmFsaWRVc2VyIHtcbiAgICA8PEZ1bmN0aW9uPj5cbiAgICArdXNlcjogVXNlclxuICB9XG4gIGlzVmFsaWRVc2VyIC4uPiBVc2VyIDogdXNlclxuICBpc1ZhbGlkVXNlciAuLj4gaXNWYWxpZFBpbG90TGljZW5jZU51bWJlciA6IChjYWxscylcblxuICBjbGFzcyBpc1ZhbGlkUGlsb3RMaWNlbmNlTnVtYmVyIHtcbiAgICA8PEZ1bmN0aW9uPj5cbiAgICArbGljZW5jZU51bWJlcjogUGlsb3RMaWNlbmNlTnVtYmVyXG4gIH1cbiAgaXNWYWxpZFBpbG90TGljZW5jZU51bWJlciAuLj4gUGlsb3RMaWNlbmNlTnVtYmVyIDogbGljZW5jZU51bWJlclxuXG4iLCJtZXJtYWlkIjoie1xuICBcInRoZW1lXCI6IFwiZGVmYXVsdFwiXG59IiwidXBkYXRlRWRpdG9yIjpmYWxzZSwiYXV0b1N5bmMiOnRydWUsInVwZGF0ZURpYWdyYW0iOmZhbHNlfQ)

```typescript
function isValidUser(user: User): boolean { ... }

function isValidPilotLicenceNumber(licenceNumber: PilotLicenceNumber): boolean { ... }
```

This leaves one important problem – how do we represent the return type of a function?

## Return types of functions

Since a Typescript function only has one return type, we might want to represent it as one structure. That type could have one or more members (if it is an inline type, interface or class). It could also have relationships to other types (e.g. an interface that realises another interface). It could even be another function.

We could designate an additional, third, compartment in which to place information about the return type. There are two downsides to this, however. Firstly, introducing a third compartment increases the learning curve for someone who is more accustomed to seeing only two compartments in a UML box diagram. They must figure out what the third compartment signifies and then remember that it signifies the return type and that they should look there for the return type. Secondly, there is the awkward problem of representing a return type which isn't simply a collection of members. How do we represent a return type that itself has a relationship with another type? Or a return type that is itself a function? If we simply list a single name in the third compartment as though it is a member, this creates confusion as to whether we are naming the return type itself or a member of the return type. For the above reasons it seems inconvenient to house our return type in the third compartment – or any compartment – of a Function box.

A better way is to put the return type in a separate box altogether. We can actually do this, in much the same way as we would represent a type of a function parameter. The relationship can easily be clarified with a connector, which points from the function box to the return type box with a 'returns' label.

[![](https://mermaid.ink/img/eyJjb2RlIjoiY2xhc3NEaWFncmFtXG5cbiAgY2xhc3MgZmV0Y2hGbGlnaHREZXRhaWxzIHtcbiAgICA8PEZ1bmN0aW9uPj5cbiAgICAraWQ6IHN0cmluZ1xuICB9XG4gIGZldGNoRmxpZ2h0RGV0YWlscyAuLj4gRmxpZ2h0IDogKHJldHVybnMpXG5cblxuICBjbGFzcyBGbGlnaHQge1xuICAgIDw8SW50ZXJmYWNlPj5cbiAgICArZmxpZ2h0TnVtYmVyOiBzdHJpbmdcbiAgICArY3Jld3M6IENyZXdbXVxuICAgICtwaWxvdHM6IFBpbG90W11cbiAgfSIsIm1lcm1haWQiOnsidGhlbWUiOiJkZWZhdWx0In0sInVwZGF0ZUVkaXRvciI6ZmFsc2UsImF1dG9TeW5jIjp0cnVlLCJ1cGRhdGVEaWFncmFtIjpmYWxzZX0)](https://mermaid.live/edit#eyJjb2RlIjoiY2xhc3NEaWFncmFtXG5cbiAgY2xhc3MgZmV0Y2hGbGlnaHREZXRhaWxzIHtcbiAgICA8PEZ1bmN0aW9uPj5cbiAgICAraWQ6IHN0cmluZ1xuICB9XG4gIGZldGNoRmxpZ2h0RGV0YWlscyAuLj4gRmxpZ2h0IDogKHJldHVybnMpXG5cblxuICBjbGFzcyBGbGlnaHQge1xuICAgIDw8SW50ZXJmYWNlPj5cbiAgICArZmxpZ2h0TnVtYmVyOiBzdHJpbmdcbiAgICArY3Jld3M6IENyZXdbXVxuICAgICtwaWxvdHM6IFBpbG90W11cbiAgfSIsIm1lcm1haWQiOiJ7XG4gIFwidGhlbWVcIjogXCJkZWZhdWx0XCJcbn0iLCJ1cGRhdGVFZGl0b3IiOmZhbHNlLCJhdXRvU3luYyI6dHJ1ZSwidXBkYXRlRGlhZ3JhbSI6ZmFsc2V9)

```typescript
async function fetchFlightDetails(id: string): Flight { ... }
```

<br />

## Framework-specific functions

We can do a similar re-purposing to support framework-specific building blocks which are functions – for example, React **components** and custom **hooks**.

UML includes a "stereotype" pattern – a double-angle-bracketed name that sits above the title. This can be used to label our functions – e.g. `<<Component>>`, `<<Hook>>` for React-specific functions. These, along with the aforementioned ways of depicting functions and types, can be used to diagram the components of a React application.

[![](https://mermaid.ink/img/eyJjb2RlIjoiY2xhc3NEaWFncmFtXG5cblxuICBjbGFzcyB1c2VGbGlnaHREZXRhaWxzIHtcbiAgICA8PEhvb2s-PlxuICAgICtmbGlnaHRJZDogc3RyaW5nXG4gIH1cbiAgdXNlRmxpZ2h0RGV0YWlscyAuLj4gRmxpZ2h0IDogKHJldHVybnMpXG4gIHVzZUZsaWdodERldGFpbHMgLi4-IGZldGNoRmxpZ2h0RGV0YWlscyA6IChjYWxscylcblxuICBjbGFzcyBGbGlnaHREZXRhaWxzIHtcbiAgICA8PENvbXBvbmVudD4-XG4gICAgK2ZsaWdodElkOiBzdHJpbmdcbiAgICAtc2V0RmxpZ2h0OiAoZmxpZ2h0OiBGbGlnaHQpOiB2b2lkXG4gICAgLWZsaWdodCgpOiBGbGlnaHRcbiAgfVxuICBGbGlnaHREZXRhaWxzIC4uPiB1c2VGbGlnaHREZXRhaWxzIDogKGNhbGxzKVxuICBGbGlnaHREZXRhaWxzIFwiMVwiICotLT4gXCIxLi5tXCIgUGlsb3REZXRhaWxzIDogKHJlbmRlcnMpXG4gIEZsaWdodERldGFpbHMgXCIxXCIgKi0tPiBcIjEuLm1cIiBDcmV3RGV0YWlscyA6IChyZW5kZXJzKVxuXG4gIGNsYXNzIFBpbG90RGV0YWlscyB7XG4gICAgPDxDb21wb25lbnQ-PlxuICAgICtwaWxvdDogUGlsb3RcbiAgfVxuICBQaWxvdERldGFpbHMgLi4-IFBpbG90XG5cbiAgY2xhc3MgQ3Jld0RldGFpbHMge1xuICAgIDw8Q29tcG9uZW50Pj5cbiAgICArY3JldzogQ3Jld1xuICB9XG4gIENyZXdEZXRhaWxzIC4uPiBDcmV3XG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuIiwibWVybWFpZCI6eyJ0aGVtZSI6ImRlZmF1bHQifSwidXBkYXRlRWRpdG9yIjpmYWxzZSwiYXV0b1N5bmMiOnRydWUsInVwZGF0ZURpYWdyYW0iOmZhbHNlfQ)](https://mermaid.live/edit/#eyJjb2RlIjoiY2xhc3NEaWFncmFtXG5cblxuICBjbGFzcyB1c2VGbGlnaHREZXRhaWxzIHtcbiAgICA8PEhvb2s-PlxuICAgICtmbGlnaHRJZDogc3RyaW5nXG4gIH1cbiAgdXNlRmxpZ2h0RGV0YWlscyAuLj4gRmxpZ2h0IDogKHJldHVybnMpXG4gIHVzZUZsaWdodERldGFpbHMgLi4-IGZldGNoRmxpZ2h0RGV0YWlscyA6IChjYWxscylcblxuICBjbGFzcyBGbGlnaHREZXRhaWxzIHtcbiAgICA8PENvbXBvbmVudD4-XG4gICAgK2ZsaWdodElkOiBzdHJpbmdcbiAgICAtc2V0RmxpZ2h0OiAoZmxpZ2h0OiBGbGlnaHQpOiB2b2lkXG4gICAgLWZsaWdodCgpOiBGbGlnaHRcbiAgfVxuICBGbGlnaHREZXRhaWxzIC4uPiB1c2VGbGlnaHREZXRhaWxzIDogKGNhbGxzKVxuICBGbGlnaHREZXRhaWxzIFwiMVwiICotLT4gXCIxLi5tXCIgUGlsb3REZXRhaWxzIDogKHJlbmRlcnMpXG4gIEZsaWdodERldGFpbHMgXCIxXCIgKi0tPiBcIjEuLm1cIiBDcmV3RGV0YWlscyA6IChyZW5kZXJzKVxuXG4gIGNsYXNzIFBpbG90RGV0YWlscyB7XG4gICAgPDxDb21wb25lbnQ-PlxuICAgICtwaWxvdDogUGlsb3RcbiAgfVxuICBQaWxvdERldGFpbHMgLi4-IFBpbG90XG5cbiAgY2xhc3MgQ3Jld0RldGFpbHMge1xuICAgIDw8Q29tcG9uZW50Pj5cbiAgICArY3JldzogQ3Jld1xuICB9XG4gIENyZXdEZXRhaWxzIC4uPiBDcmV3XG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuIiwibWVybWFpZCI6IntcbiAgXCJ0aGVtZVwiOiBcImRlZmF1bHRcIlxufSIsInVwZGF0ZUVkaXRvciI6ZmFsc2UsImF1dG9TeW5jIjp0cnVlLCJ1cGRhdGVEaWFncmFtIjpmYWxzZX0)

```typescript
function useFlightDetails({
  flightId
}: {
  flightId: string
}): {
  crews: Crew[],
  pilots: Pilot[],
} { ... }

function FlightDetails({
  flightId
}: {
  flightId: string
}): React.Node { ... }

function PilotDetails({
  pilot,
}: {
  pilot: Pilot
}): React.Node { ... }

function CrewDetails({
  crew,
}: {
  crew: Crew
}): React.Node { ... }
```

Note: As React components typically take a single 'props' object as a parameter, I opted to just inline that object's members in the first compartment of the `<<Component>>` box. This very small inconsistency probably won't be too confusing to anyone who has a basic understanding of React.

<br />

## Putting it all together

For your reference, here is one big UML diagram comprising all the pieces discussed in this article:

[![](https://mermaid.ink/img/eyJjb2RlIjoiY2xhc3NEaWFncmFtXG4gIGNsYXNzIFVzZXJUeXBlIHtcbiAgICA8PEVudW0-PlxuICAgICtQaWxvdFxuICAgICtDcmV3XG4gIH1cblxuICBjbGFzcyBCYXNlVXNlciB7XG4gICAgPDxJbnRlcmZhY2U-PlxuICAgICt0eXBlOiBVc2VyVHlwZVxuICAgICtmaXJzdE5hbWU6IHN0cmluZ1xuICAgICtsYXN0TmFtZTogc3RyaW5nXG4gICAgK2VtYWlsOiBzdHJpbmdcbiAgfVxuICBCYXNlVXNlciAuLj4gVXNlclR5cGVcblxuXG4gIGNsYXNzIHN0cmluZyB7XG4gICAgPDxUeXBlPj5cbiAgfVxuXG4gIGNsYXNzIFBpbG90TGljZW5jZU51bWJlciB7XG4gICAgPDxUeXBlPj5cbiAgfVxuICBQaWxvdExpY2VuY2VOdW1iZXIgLS18PiBzdHJpbmdcblxuICBjbGFzcyBQaWxvdCB7XG4gICAgPDxUeXBlPj5cbiAgICArdHlwZTogVXNlclR5cGUuUGlsb3RcbiAgICArbGljZW5jZU51bWJlcjogUGlsb3RMaWNlbmNlTnVtYmVyXG4gICAgK3llYXJzRXhwZXJpZW5jZTogbnVtYmVyXG4gIH1cbiAgUGlsb3QgLS18PiBCYXNlVXNlclxuICBQaWxvdCAuLj4gUGlsb3RMaWNlbmNlTnVtYmVyIDogbGljZW5jZU51bWJlclxuICBQaWxvdCAuLj4gVXNlclR5cGUgOiB0eXBlXG5cbiAgY2xhc3MgQ3JldyB7XG4gICAgPDxUeXBlPj5cbiAgICArdHlwZTogVXNlclR5cGUuQ3JldztcbiAgICArY3Jld0NvZGU6IHN0cmluZztcbiAgfVxuICBDcmV3IC0tfD4gQmFzZVVzZXJcbiAgQ3JldyAuLj4gVXNlclR5cGUgOiB0eXBlXG5cbiAgY2xhc3MgVXNlciB7XG4gICAgPDxUeXBlPj5cbiAgICBQaWxvdCB8IENyZXdcbiAgfVxuICBVc2VyIC0tfD4gUGlsb3RcbiAgVXNlciAtLXw-IENyZXdcblxuICBjbGFzcyBGbGlnaHQge1xuICAgIDw8SW50ZXJmYWNlPj5cbiAgICArZmxpZ2h0TnVtYmVyOiBzdHJpbmdcbiAgICArY3Jld3M6IENyZXdbXVxuICAgICtwaWxvdHM6IFBpbG90W11cbiAgfVxuICBGbGlnaHQgXCIwXCIgby0tPiBcIm5cIiBDcmV3IDogY3Jld3NcbiAgRmxpZ2h0IFwiMFwiIG8tLT4gXCJuXCIgUGlsb3QgOiBwaWxvdHNcblxuXG4gIGNsYXNzIGlzVmFsaWRVc2VyIHtcbiAgICA8PEZ1bmN0aW9uPj5cbiAgICBpc1ZhbGlkVXNlcigpOiBib29sZWFuXG4gICAgK3VzZXI6IFVzZXJcbiAgfVxuICBpc1ZhbGlkVXNlciAuLj4gVXNlclxuICBpc1ZhbGlkVXNlciAuLj4gaXNWYWxpZFBpbG90TGljZW5jZU51bWJlciA6IChjYWxscylcblxuICBjbGFzcyBpc1ZhbGlkUGlsb3RMaWNlbmNlTnVtYmVyIHtcbiAgICA8PEZ1bmN0aW9uPj5cbiAgICArbGljZW5jZU51bWJlcjogUGlsb3RMaWNlbmNlTnVtYmVyXG4gIH1cbiAgaXNWYWxpZFBpbG90TGljZW5jZU51bWJlciAuLj4gUGlsb3RMaWNlbmNlTnVtYmVyIDogbGljZW5jZU51bWJlclxuXG5cblxuICBjbGFzcyBmZXRjaEZsaWdodERldGFpbHMge1xuICAgIDw8RnVuY3Rpb24-PlxuICAgICtpZDogc3RyaW5nXG4gIH1cbiAgZmV0Y2hGbGlnaHREZXRhaWxzIC4uPiBGbGlnaHQgOiAocmV0dXJucylcblxuXG5cblxuICBjbGFzcyB1c2VGbGlnaHREZXRhaWxzIHtcbiAgICA8PEhvb2s-PlxuICAgICtmbGlnaHRJZDogc3RyaW5nXG4gIH1cbiAgdXNlRmxpZ2h0RGV0YWlscyAuLj4gRmxpZ2h0IDogKHJldHVybnMpXG4gIHVzZUZsaWdodERldGFpbHMgLi4-IGZldGNoRmxpZ2h0RGV0YWlscyA6IChjYWxscylcblxuICBjbGFzcyBGbGlnaHREZXRhaWxzIHtcbiAgICA8PENvbXBvbmVudD4-XG4gICAgK2ZsaWdodElkOiBzdHJpbmdcbiAgICAtZmxpZ2h0OiBGbGlnaHRcbiAgICAtc2V0RmxpZ2h0OiAoZmxpZ2h0OiBGbGlnaHQpOiB2b2lkXG4gIH1cbiAgRmxpZ2h0RGV0YWlscyAuLj4gdXNlRmxpZ2h0RGV0YWlscyA6IChjYWxscylcbiAgRmxpZ2h0RGV0YWlscyBcIjFcIiAqLS0-IFwiMS4ubVwiIFBpbG90RGV0YWlscyA6IChyZW5kZXJzKVxuICBGbGlnaHREZXRhaWxzIFwiMVwiICotLT4gXCIxLi5tXCIgQ3Jld0RldGFpbHMgOiAocmVuZGVycylcblxuICBjbGFzcyBQaWxvdERldGFpbHMge1xuICAgIDw8Q29tcG9uZW50Pj5cbiAgICArcGlsb3Q6IFBpbG90XG4gIH1cbiAgUGlsb3REZXRhaWxzIC4uPiBQaWxvdFxuXG4gIGNsYXNzIENyZXdEZXRhaWxzIHtcbiAgICA8PENvbXBvbmVudD4-XG4gICAgK2NyZXc6IENyZXdcbiAgfVxuICBDcmV3RGV0YWlscyAuLj4gQ3Jld1xuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbiIsIm1lcm1haWQiOnsidGhlbWUiOiJkZWZhdWx0In0sInVwZGF0ZUVkaXRvciI6ZmFsc2UsImF1dG9TeW5jIjp0cnVlLCJ1cGRhdGVEaWFncmFtIjpmYWxzZX0)](https://mermaid.live/edit/#eyJjb2RlIjoiY2xhc3NEaWFncmFtXG4gIGNsYXNzIFVzZXJUeXBlIHtcbiAgICA8PEVudW0-PlxuICAgICtQaWxvdFxuICAgICtDcmV3XG4gIH1cblxuICBjbGFzcyBCYXNlVXNlciB7XG4gICAgPDxJbnRlcmZhY2U-PlxuICAgICt0eXBlOiBVc2VyVHlwZVxuICAgICtmaXJzdE5hbWU6IHN0cmluZ1xuICAgICtsYXN0TmFtZTogc3RyaW5nXG4gICAgK2VtYWlsOiBzdHJpbmdcbiAgfVxuICBCYXNlVXNlciAuLj4gVXNlclR5cGVcblxuXG4gIGNsYXNzIHN0cmluZyB7XG4gICAgPDxUeXBlPj5cbiAgfVxuXG4gIGNsYXNzIFBpbG90TGljZW5jZU51bWJlciB7XG4gICAgPDxUeXBlPj5cbiAgfVxuICBQaWxvdExpY2VuY2VOdW1iZXIgLS18PiBzdHJpbmdcblxuICBjbGFzcyBQaWxvdCB7XG4gICAgPDxUeXBlPj5cbiAgICArdHlwZTogVXNlclR5cGUuUGlsb3RcbiAgICArbGljZW5jZU51bWJlcjogUGlsb3RMaWNlbmNlTnVtYmVyXG4gICAgK3llYXJzRXhwZXJpZW5jZTogbnVtYmVyXG4gIH1cbiAgUGlsb3QgLS18PiBCYXNlVXNlclxuICBQaWxvdCAuLj4gUGlsb3RMaWNlbmNlTnVtYmVyIDogbGljZW5jZU51bWJlclxuICBQaWxvdCAuLj4gVXNlclR5cGUgOiB0eXBlXG5cbiAgY2xhc3MgQ3JldyB7XG4gICAgPDxUeXBlPj5cbiAgICArdHlwZTogVXNlclR5cGUuQ3JldztcbiAgICArY3Jld0NvZGU6IHN0cmluZztcbiAgfVxuICBDcmV3IC0tfD4gQmFzZVVzZXJcbiAgQ3JldyAuLj4gVXNlclR5cGUgOiB0eXBlXG5cbiAgY2xhc3MgVXNlciB7XG4gICAgPDxUeXBlPj5cbiAgICBQaWxvdCB8IENyZXdcbiAgfVxuICBVc2VyIC0tfD4gUGlsb3RcbiAgVXNlciAtLXw-IENyZXdcblxuICBjbGFzcyBGbGlnaHQge1xuICAgIDw8SW50ZXJmYWNlPj5cbiAgICArZmxpZ2h0TnVtYmVyOiBzdHJpbmdcbiAgICArY3Jld3M6IENyZXdbXVxuICAgICtwaWxvdHM6IFBpbG90W11cbiAgfVxuICBGbGlnaHQgXCIwXCIgby0tPiBcIm5cIiBDcmV3IDogY3Jld3NcbiAgRmxpZ2h0IFwiMFwiIG8tLT4gXCJuXCIgUGlsb3QgOiBwaWxvdHNcblxuXG4gIGNsYXNzIGlzVmFsaWRVc2VyIHtcbiAgICA8PEZ1bmN0aW9uPj5cbiAgICBpc1ZhbGlkVXNlcigpOiBib29sZWFuXG4gICAgK3VzZXI6IFVzZXJcbiAgfVxuICBpc1ZhbGlkVXNlciAuLj4gVXNlclxuICBpc1ZhbGlkVXNlciAuLj4gaXNWYWxpZFBpbG90TGljZW5jZU51bWJlciA6IChjYWxscylcblxuICBjbGFzcyBpc1ZhbGlkUGlsb3RMaWNlbmNlTnVtYmVyIHtcbiAgICA8PEZ1bmN0aW9uPj5cbiAgICArbGljZW5jZU51bWJlcjogUGlsb3RMaWNlbmNlTnVtYmVyXG4gIH1cbiAgaXNWYWxpZFBpbG90TGljZW5jZU51bWJlciAuLj4gUGlsb3RMaWNlbmNlTnVtYmVyIDogbGljZW5jZU51bWJlclxuXG5cblxuICBjbGFzcyBmZXRjaEZsaWdodERldGFpbHMge1xuICAgIDw8RnVuY3Rpb24-PlxuICAgICtpZDogc3RyaW5nXG4gIH1cbiAgZmV0Y2hGbGlnaHREZXRhaWxzIC4uPiBGbGlnaHQgOiAocmV0dXJucylcblxuXG5cblxuICBjbGFzcyB1c2VGbGlnaHREZXRhaWxzIHtcbiAgICA8PEhvb2s-PlxuICAgICtmbGlnaHRJZDogc3RyaW5nXG4gIH1cbiAgdXNlRmxpZ2h0RGV0YWlscyAuLj4gRmxpZ2h0IDogKHJldHVybnMpXG4gIHVzZUZsaWdodERldGFpbHMgLi4-IGZldGNoRmxpZ2h0RGV0YWlscyA6IChjYWxscylcblxuICBjbGFzcyBGbGlnaHREZXRhaWxzIHtcbiAgICA8PENvbXBvbmVudD4-XG4gICAgK2ZsaWdodElkOiBzdHJpbmdcbiAgICAtZmxpZ2h0OiBGbGlnaHRcbiAgICAtc2V0RmxpZ2h0OiAoZmxpZ2h0OiBGbGlnaHQpOiB2b2lkXG4gIH1cbiAgRmxpZ2h0RGV0YWlscyAuLj4gdXNlRmxpZ2h0RGV0YWlscyA6IChjYWxscylcbiAgRmxpZ2h0RGV0YWlscyBcIjFcIiAqLS0-IFwiMS4ubVwiIFBpbG90RGV0YWlscyA6IChyZW5kZXJzKVxuICBGbGlnaHREZXRhaWxzIFwiMVwiICotLT4gXCIxLi5tXCIgQ3Jld0RldGFpbHMgOiAocmVuZGVycylcblxuICBjbGFzcyBQaWxvdERldGFpbHMge1xuICAgIDw8Q29tcG9uZW50Pj5cbiAgICArcGlsb3Q6IFBpbG90XG4gIH1cbiAgUGlsb3REZXRhaWxzIC4uPiBQaWxvdFxuXG4gIGNsYXNzIENyZXdEZXRhaWxzIHtcbiAgICA8PENvbXBvbmVudD4-XG4gICAgK2NyZXc6IENyZXdcbiAgfVxuICBDcmV3RGV0YWlscyAuLj4gQ3Jld1xuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbiIsIm1lcm1haWQiOiJ7XG4gIFwidGhlbWVcIjogXCJkZWZhdWx0XCJcbn0iLCJ1cGRhdGVFZGl0b3IiOmZhbHNlLCJhdXRvU3luYyI6dHJ1ZSwidXBkYXRlRGlhZ3JhbSI6ZmFsc2V9)

With all these parts in one diagram, including connective lines, we can perhaps see more clearly one of the main benefits of diagramming: being able to zoom out and see how all the parts connect together to form the whole.

We can, for example, easily see which components depend on the core types `Pilot` and `Crew`. During initial solution design, this diagram might help us to estimate and prioritise the work. Or during a complex change, it might help to visualise the impact, were we to modify one or both of these types.

This kind of "birds-eye view" wouldn't be possible with just code alone, which appears in a hierarchy of folders and files. Even if we expanded every folder, we still wouldn't see all the connections between the structures contained in the files. Diagrams give us a more powerful visualisation of our code.

## Future directions

Many UML-code and code-UML converters already exist, supporting class-based programming languages such as Java and C#. It would be great to see such tools implemented for Typescript. [tplant](https://github.com/bafolts/tplant) looks like a promising start, though it appears to only support the code-UML direction.

It would be interesting to see if subsets of UML emerge, focussed on representing functional and/or Javascript/Typescript structures.

State-charts have already been recommended for diagramming Redux state machines. Perhaps it would be better for developers to standardise on UML state diagram notation.

## Further reading

These books may serve as a handy guide and reference on UML:

- _UML Distilled_ • Martin FOWLER
- _The Unified Modelling Language User Guide_ • Grady BOOCH
- _Modelling with UML - Language, Concepts, Methods_ • Bernhard RUMPE

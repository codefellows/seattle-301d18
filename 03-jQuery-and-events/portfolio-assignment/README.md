# Portfolio assignment for class 3

Continue building and improving your portfolio site. Here's how you can leverage events:

Adapt these stories as necessary to fit how you want to build your portfolio.

## User Stories: MVP
  1. As the creator, I want the Home and About nav links to act as tabs, so my story is revealed FAST.
    - This means your links to NOT navigate to a new page.
    - Instead, your "single page app" shows only the section related to the navigation tab that is selected.
    - You can use 'data-' attributes to associate a content section with a particular tab
    - Then use jQuery so when the tab is clicked, you hide all the sections, then reveal the associated section only.
  1. As a reader, I want the portfolio to use a nice color scheme, so that it stands out visually.

## Stretch Goals (not required):
  1. As a reader, I want project descriptions truncated to the first paragraph so that I can easily scroll though the whole list.
  1. As a reader, I want to click the "More" button so that I can expand the entire description.
  1. As a reader, I want projects filterable by category so that I can review just the things that interest me.

## Technical Requirements and Grading Rubric
  - Use event delegation whenever appropriate.
  - Add click handlers to at leat one nav section.
  - Do as much work as you can with advanced selectors, rather than littering your markup with classes and ids.
  - When classes and IDs are needed, pick semantic names. There is to be no `$('#content .content')` nonsense!

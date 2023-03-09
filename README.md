# jquery-unstack-tables
Remodel a table into a list and progressively unstack it in larger presentations.

## How To Install
Simply include `unstack.css` in the head of your HTML, and include the `unstack.js` all the way at the bottom of the `<body>` (right before the closing tag).

## How To Use
Any table can use Unstack. Simply place a mixture of any of the following classed on a table element. Keep in mind however, that only one axis class and one visiblity class can be used at a time per table.
* **Axis Classes**
  * `unstack-x` This will create labels based on the X axis of the table and stack data based on the Y axis of the table. *Cannot be used with the unstack-y class.*
  * `unstack-y` This will create labels based on the Y axis of the table and stack data based on the X axis of the table. *Cannot be used with the unstack-x class.*
* **Visibility Classes**
  * `unstack-small` Will cause the source table to be visible, and the list hidden, in all viewports. *Cannot be used with unstack-medium or unstack-large classes.*
  * `unstack-medium` Will cause the source table to be visible, and the list hidden, beginning with 640px and larger viewports. *Cannot be used with unstack-small or unstack-large classes.*
  * `unstack-large` Will cause the source table to be visible, and the list hidden, beginning with 1024px and larget viewports. *Cannot be used with unstack-small or unstack-medium classes.*

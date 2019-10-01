# Questions and Answers 

### NewDealForm will rerender some of its children unnecessarily. Why? What is the generally recommended solution?

I believe NewDealForm is unnecessarily rerendering all of the inputs because onChange is expecting an uninvoked function. I believe it would be standard procedure to use a fat arrow function that returns propertyUpdater function invoked.

``` e.g. onChange={() => this.propertyUpdater('dealType')} ```
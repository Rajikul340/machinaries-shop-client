import React from "react";

const Blogs = () => {
  return (
    <div>
      <div>
        <h4>
          1 What are the different ways to manage a state in a React
          application?
        </h4>
        <p>
          There are four main types of state you need to properly manage in your
          React apps:
          <ul>
            <li>Local state</li>
            <li>Global state</li>
            <li>Server state</li>
            <li>URL state</li>
          </ul>
        </p>
      </div>
      <div>
        <h4>2 How does prototypical inheritance work?</h4>
        <p>
          Every object in JavaScript has a built-in property, which is called
          its prototype. The prototype is itself an object, so the prototype
          will have its own prototype, making what's called a prototype chain.
          The chain ends when we reach a prototype that has null for its own
          prototype.
        </p>
      </div>
      <div>
        <h4>3 What is a unit test? Why should we write unit tests?</h4>
        <p>
          A unit test is a way of testing a unit - the smallest piece of code
          that can be logically isolated in a system. In most programming
          languages, that is a function, a subroutine, a method or property. The
          isolated part of the definition is important.

          he key is: when you write test you take the perspective of the one that will consume your code. It forces you to have an holistic approach of the behavior to implement. This way ambiguities you get from requirements become obvious and are immediately taken account when code is written the first time.
        </p>
      </div>
      <div>
        <h4>4 React vs. Angular vs. Vue</h4>
        <p>
            <strong>React</strong>
            React can be used as a UI library to render elements, without enforcing a specific project structure, and that’s why it’s not strictly a framework.React Elements are the smallest building blocks of React apps. They are more powerful than DOM elements because the React DOM makes sure to update them efficiently whenever something changes.

        </p>
        <p>
            <strong>Vue</strong>
            The Vue.js core library focuses on the View layer only Although Vue is not strictly associated with the MVVM (Model-View-ViewModel) pattern, its design was partly inspired by it. With Vue, you’ll be working mostly on the ViewModel layer, to make sure that the application data is processed in a way that allows the framework to render an up-to-date View.
        </p>
        <p>
            <strong>Anguler</strong>
            AngularJS, the original framework, is an MVC (Model-View-Controller)framework. But in Angular 2, there’s no strict association with MV*-patterns as it is also component-based.
            Each component in Angular contains a Template, a Class that defines the application logic, and MetaData (Decorators). The metadata for a component tells Angular where to find the building blocks that it needs to create and present its view.
        </p>
      </div>
    </div>
  );
};

export default Blogs;

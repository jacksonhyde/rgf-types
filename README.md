# Types for React Gov Forms

* `Service: RgfService` - the contents of `service.json`, encompasing the Flows, Steps, Fields and other configuration options that are used throughout the project instance.
* `Flow: RgfFlow` - a collection of Steps that make up a single user journey. Steps and Pages defined within a Flow are scoped to the flow path (eg. the `/world` Step within the `/hello` Flow will have the url `/hello/world`). As well as the Steps and Pages defined in the Service, each Flow always has a penultimate 'Check Your Answers' Step and Pages for handling submission success and failure.
* `Step: RgfStep` - a collection of `Field` instances that make up a single form step. A Step definition can be reused across multiple Flows.
* `Field: RgfField` - a single field (sometimes made up of multiple inputs, eg. a date field) representing a data point in the submission model. Fields can be used in multiple steps, but the value of a field is synced across all Flows in the Service.
* `Page: RgfPage` - a static page that renders markdown content from the translation data. Link buttons can be defined in the service. Pages that sit outside a Flow will be scoped to the root.

### Namespace and Types:

Config Types are used to type the imported service definition.
State Types are used to type persisted data submitted via the client.

* RgfField
  - RgfField.Config
  - RgfField.State
  - RgfField.Error

* RgfStep
  - RgfStep.Config
  - RgfStep.State

* RgfFlow
  - RgfStep.Config
  - RgfStep.State

* RgfPage
  - RgfStep.Config

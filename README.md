# Types for React Gov Forms

| Namespace | Description |
|---|---|
| `Service: RgfService` | The contents of `service.json`, encompasing the Flows, Steps, Fields and other configuration options that are used throughout the project instance |
| `Flow: RgfFlow` | A collection of Steps and Pages that make up a single user journey, scoped to the flow path (eg. the `/world` Step within the `/hello` Flow will have the url `/hello/world`). As well as the Steps and Pages defined in the Service, each Flow always has a penultimate 'Check Your Answers' Step and Pages for handling submission success and failure. |
| `Step: RgfStep` | A collection of `Field` instances that make up a single form step. A Step definition can be reused across multiple Flows. |
| `Field: RgfField` | A single field (sometimes made up of multiple inputs, eg. a date field) representing a data point in the submission model. Fields can be used in multiple steps, but the value of a field is synced across all Flows in the Service. |
| `Page: RgfPage` | A static page that renders markdown content from the translation data. Link buttons can be defined in the service. Pages that sit outside a Flow will be scoped to the root. |

### Exported Types:

Config Types are used to type the imported service definition.
State Types are used to type persisted data submitted via the client.

* RgfService
  - RgfService.Config
 
* RgfField
  - RgfField.Config
  - RgfField.State
  - RgfField.Error

* RgfStep
  - RgfStep.Config
  - RgfStep.State

* RgfFlow
  - RgfFlow.Config
  - RgfFlow.State

* RgfPage
  - RgfPage.Config

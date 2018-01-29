# Effective Story Writing

## Overview
The intention of this document is to define the format and standards for a story so that those interested in creating them are enabled to do so productively. 

## Title & Labels
### Story Title
The title of the story should capture the system that the majority of the work is for, if applicable, or a general category for the work. Also included with the system should be a short, high level description of the work to be done. This should be structured like : [System]: [Description]

Some examples:
* Sign Channel 2.0: Floating Action Button ("FAB") in Header
* EXP Platform: Allow routes to be configurable by consumers
* Designer 2.0: Add Template Workflow

For a spike story, a capitalized `SPIKE` should appear in the title, after the system, and followed by a hyphen. For example:
* Sign Channel 2.0: SPIKE - Analyze Migration Data from Legacy System

### Labels
Each story should be labeled to make it easier to associate with different systems, projects and categories - both at a glance and by the use of filters. At a minimum, add a label to the story for each system that is impacted by it. It is possible that a given story is labeled for multiple systems if the work crosses application boundaries. 

Some examples:
* Sign Channel 2.0
* ExpPlatform
* Spike
* Tech Debt
* Authentication / Authorization
* User Interface

## Description
The description field of the story should have a consistent set of sections to explain how the work fits into the larger context and what the scope of work covered by the story is. Also included should be any external references that may serve as requirements for the story or provide additional context about the work. While story authors are encouraged to add any sections they believe will help in understanding the story, there is a set of standard sections that should be used, those sections are:

### Overview
This section provides context around the work and how it fits into the larger ecosystem/application/feature. It should primarily focus on answering the question "Why are we doing this work?"

### Story Scope
This is the specific set of requirements for the story, defining the scope of work to be completed. It should primarily focus on answering the question "What needs to be done?" For any stories that are time boxed, this section should define the time boundaries. For example, "These efforts are time boxed to 48 hours (1 sprint) of resource time."

### Out of Scope (optional)
This optional section helps to clarify the story scope by explicitly calling out things that are not included in the story scope. The goal is to ensure that both the development team and product owners understand what things will not be delivered as part of this story work - often helpful if there are  cross cutting concerns or infrastructure that may or may not be pertinent to the defined story scope. This normally takes the form of a bulleted list.

### Prerequisites (optional)
This optional section helps clarify the ability to schedule the story, ensuring that any stories that this work is dependent upon are known. The goal is not to capture every bit of prerequisite work, but to provide a high level understanding of the dependency chain between stories and scheduling considerations. Authors may use reference links to other stories, or a simple bulleted list with details.
 
### Acceptance Criteria
The set of expected functionality to be delivered by the story work being performed. This should be something explicit and is used as the guidelines for testing that the story scope has been completed. It is recommended that the criteria is written as a set of statements that describe scenarios that can be verified by interacting with the software rather than reviewing the code.

Some examples:
* Exceptions that occur are logged and can be viewed in Application Insights
* Callers of the service can add a valid Player and receive a HTTP 202 response, as defined by the API spec

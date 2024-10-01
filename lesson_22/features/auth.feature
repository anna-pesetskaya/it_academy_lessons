Feature: Testing Cucumber.io website login and logout

  As a user
  I want to access the Cucumber.io website
  So that I can learn about Cucumber

  Scenario: Verify the title of the homepage
    Given I navigate to https://cucumber.io/ page
    Then the title should be "BDD Testing & Collaboration Tools for Teams | Cucumber"

  Scenario: User Login
    Given I navigate to https://studio.cucumber.io/users/sign_in page
    When I input valid username "username" into "Username Field" and password "password" into "Password Field"
    Then I click on "Sign In Button" button
    Then I should be redirected to the url that contains "/projects" inside it
    And I should see "Side Menu"


  Scenario: User Logout
    When I click on "User Button" button
    And I click on "Sign Out Button" button
    Then I should be redirected to the url that contains "/sign_in" inside it
    And I should see "Sign In Button"



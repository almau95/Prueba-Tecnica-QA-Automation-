Feature: Inicio de Sesión

  Scenario: Inicio de sesión exitoso con usuario registrado
    Given que el usuario está en la pantalla de inicio de sesión
    When intenta iniciar sesión con "alvaro@test.com" y "Pass123"
    Then el usuario debería ver la pantalla principal

Feature: Registro de Usuario

  Scenario: Registro exitoso en MaterialLoginExample
    Given que el usuario está en la pantalla de inicio de sesión
    And selecciona la opción para crear una cuenta
    When completa el registro con "Alvaro Lopez" "Irpavi 123" "alvaro@test.com" "77712345" "Pass123" "Pass123"
    Then el usuario debería ver que el botón de registro ya no está presente
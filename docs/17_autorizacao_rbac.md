# Autorização RBAC

## RBAC

RBAC (Role-based access control) significa `controle de acesso baseado em função` e serve para liberarmos o acesso de um recurso de nossa API apenas se o usuário tem a função de obter essas informações.

Por exemplo, um usuário autenticado pode alterar o seu próprio nome, mas não pode alterar o nome de outro usuário. Já um usuário administrador pode além de trocar o seu próprio nome, trocar também o nome de outros usuários, pois ele tem esta função.
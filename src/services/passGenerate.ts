export default function generatePass() {
    let chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#0123456789';

    let passwordLength = 16;
    let password = '';

    // Preencher o restante da senha com caracteres aleatórios
    for (let i = 0; i < passwordLength; i++) {
        password += chars.charAt(
            Math.floor(Math.random() * chars.length)
        )
    }

    return password;
}
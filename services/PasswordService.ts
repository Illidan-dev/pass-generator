

export const generateRandomPass = (passwordSize:number = 8) =>  {
    const all_leters:string             = 'abcdefghij';
    const all_leters_uppercase:string   = all_leters.toLocaleUpperCase();
    const all_numbers:string            = '123456789';
    const all_symbols:string            = '!@#$%¨&*()_';
    const all_in_one:string             = [all_leters, all_leters_uppercase, all_numbers, all_symbols].join('');
    let defined:string                  = '';

    for( let i = 0; i <= +(passwordSize); i++ ){
        const randomIndex = Math.floor(Math.random() * all_in_one.length)
        defined += all_in_one.charAt(randomIndex);
    }

    // const randomString          = Math.random().toString(36).slice(-8);

    return defined;
}

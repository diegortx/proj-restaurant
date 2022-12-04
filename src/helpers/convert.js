//Api in using https://docs.awesomeapi.com.br #Free

export async function convert(current, to, value) {

    const res = await fetch("https://economia.awesomeapi.com.br/" + current + "-" + to + "/1");

    const resp = await res.json();

    return resp[0].bid * value;
}
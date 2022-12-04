export default {
    dateNow: function () {
        const date = new Date();
        const fdate =
            (date.getDate().toString().length == 1 ? '0' + date.getDate() : date.getDate()) +
            "/" +
            (date.getMonth().toString().length == 1 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) +
            "/" +
            date.getFullYear() +
            " " +
            (date.getHours().toString().length == 1 ? '0' + date.getHours() : date.getHours()) +
            ":" +
            (date.getMinutes().toString().length == 1 ? '0' + date.getMinutes() : date.getMinutes());
        return fdate;
    },
    dateHourNow: function () {
        const date = new Date();
        const hour = (date.getHours().toString().length == 1 ? '0' + date.getHours() : date.getHours()) + ":" + (date.getMinutes().toString().length == 1 ? '0' + date.getMinutes() : date.getMinutes());
        return hour;
    },
    weekDay: function () {
        const date = new Date();
        const day = date.getDay();

        switch (day) {
            case 1:
                return 'Segunda-Feira'
            case 2:
                return 'Terça-Feira'
            case 3:
                return 'Quarta-Feira'
            case 4:
                return 'Quinta-Feira'
            case 5:
                return 'Sexta-Feira'
            case 6:
                return 'Sabado'
            case 0:
                return 'Domingo'
        }
    }
}
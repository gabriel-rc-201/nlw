const database = require('./db')
const createProffy = require('./creatProffy')

database.then(async (db) => {
    // inserir dados 

    proffyValue = { // tabela proffy
        name: "Gabriel Ribeiro",
        avatar: "https://avatars1.githubusercontent.com/u/28678496?s=460&u=55dd5fc745df3495bcaacf6a3fc5203396e92a22&v=4",
        whatsapp: "88997246032",
        bio: "Louco por treinar kung Fu<br><br>Treina principalmente o Kung Fu do estilo Hung Gar e tambem aprendeu até o estágio intermediário do Tai Chi Chuan do estilo Yang",
    }

    classValue = { // tabela class
        subject: 4,
        cost: "70", 
        // o proffy id virá pelo banco de dados
    }

    classScheduleValues = [ // tabela Schedule
        { // o class_id virá pelo banco de dados, após cadastrarmos a class
            weekday: 1, 
            time_from: 720, 
            time_to: 1220
        },
        {
            weekday: 0,
            time_from: 520, 
            time_to: 1220
        }
    ]

    // await createProffy(db, {proffyValue, classValue, classScheduleValues})

    // consultar dados

    // todos os proffys
    const selectedProffys  = await db.all("SELECT * FROM proffys")
    // console.log(selectedProffys)

    // consultar as classes de um determinado professor 
    // e trazer junto os dados do professor

    const selectedClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;
    `)
    // console.log(selectedClassesAndProffys)

    // o horário que a pessoa trabalha, por exemplo, é das 8h - 18h
    // o horário do time_from (8h) precisa ser menor ou igual ao horário solicitado
    // o time_to precisa ser acima
    const selectClassesSchedules = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = "1"
        AND class_schedule.weekday = "0"
        AND class_schedule.time_from <= "1300"
        AND class_schedule.time_to > "1300"
    `)

    // console.log(selectClassesSchedules)

})
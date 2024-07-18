export const DATA_CONTACTS = [
    {
        name: "Pepe",
        thumbnail: "/images/pepe.jpg",
        last_connection: "ayer",
        id: 1,
        messages: [
            {
                author: "pepe",
                content: "Hola?",
                time: "15:34",
                state: "seen",
                id: 1,
            },
            {
                author: "yo",
                content: "Sos real OMG",
                time: "15:35",
                state: "seen",
                id: 2,
            },
            {
                author: "pepe",
                content: "Obviamente, acaso lo dudaste?",
                time: "15:36",
                state: "seen",
                id: 3,
            },
            {
                author: "yo",
                content: "Jamas.",
                time: "15:37",
                state: "sent",
                id: 4,
            },

            {
                author: "pepe",
                content: "Ahora eres mi servidor",
                time: "ayer a las 15:38",
                state: "seen",
                id: 5,
            },
            {
                author: "yo",
                content: "Lo que desee",
                time: "ayer a las 15:39",
                state: "sent",
                id: 6,
            },
            {
                author: "pepe",
                content: "Consigueme oro",
                time: "ayer a las 15:39",
                state: "sent",
                id: 7,
            },
            {
                author: "yo",
                content: "Ya mismo?",
                time: "ayer a las 15:39",
                state: "sent",
                id: 8,
            },
        ],
    },
    {
        name: "Messi",
        thumbnail: "/images/messi.jpg",
        last_connection: "ayer",
        id: 2,
        messages: [
            {
                author: "Messi",
                content: "Soy el mejor",
                state: "seen" | "sent" | "not-sent",
                day: "hoy" | "ayer" | "23/12/2024",
                time: "13:15",
                id: "valor_id",
            },
            {
                author: "Messi",
                content: "Uy me confundi de chat",
                state: "seen" | "sent" | "not-sent",
                day: "hoy" | "ayer" | "23/12/2024",
                time: "13:15",
                id: "valor_id",
            },
        ],
    },
    {
        name: "Abuelita",
        id: 3,
        thumbnail: "/images/abuelita.jpg",
        last_connection: "ayer",
        messages: [
            {
                author: "Abuelita",
                content: "Veni a visitarme!!!",
                state: "visto" | "entregado" | "no entregado",
                day: "hoy" | "ayer" | "23/12/2024",
                time: "13:15",
                id: "valor_id",
            },
        ],
    },
];

export const DATA_MOOK = [];

interface Recipe {
    id: number;
    type: string;
    title: string;
    subtitle: string;
    img: string;
    time: string;
    ingredients: string[];
    proceso: string[];
    notas: string[];
}


const recipes: Recipe[] = [
    {
        id: 1,
        type: 'Dulce',
        title: "Hot cakes de avena",
        subtitle: "Hot cakes super sanos y deliciosos",
        img: "recipe1.jpg",
        time: "15 - 20 min",
        ingredients: [
            "Crema de cacahuate",
            "1/2 taza de hojuelas de avena",
            "1 taza de harina de avena",
            "1 cucharadita de royal",
            "Miel maple",
            "1 taza de leche de almendra o soya",
            "1 cucharadita de aceite de coco",
            "1 1/2 tazas de harina de amaranto",
            "2 huevos de linaza",
            "3 plátanos maduros",
            "2 cucharadas de azúcar mascabado",
        ],
        proceso: [
            "Licuar todos los ingredientes, cocina y disfruta con miel maple o crema de cacahuate"
        ],
        notas: [
            "Huevos de linaza: mezcla 1 cucharada de linaza con 3 cucharadas de agua, revuelve y deja reposar por unos 10 minutos.",
            "Nota 2"
        ],
    },
    {
        id: 2,
        type: 'Salada',
        title: "Manzana decorada",
        subtitle: "Delicioso snack",
        img: "recipe2.jpg",
        time: "5 min",
        ingredients: [
            "Manzana",
            "Crema de cacahuate Original",
            "Nuez de macadamia",
            "Coco rallado",
            "Chispas de chocolate sin leche",
        ],
        proceso: [
            "Corta la manzana en rodajas", 
            "Una la crema de cacahuate",
            "Encima decora con los demás ingredientes"
        ],
        notas: []
    },
    {
        id: 3,
        type: 'Salada',
        title: "Manzana con crema de cacahuate",
        subtitle: "Snack con energía",
        img: "recipe3.jpg",
        time: "5 min",
        ingredients: [
            "Manzana",
            "Crema de cacahuate Original",
        ],
        proceso: [
            "Corta la manzana en rodajas",
            "Coloca la crema de cacahuate en un bowl pequeño",
        ],
        notas: [
            "Este puede ser un snack o también perfecto como postre"
        ]
    },
    {
        id: 4,
        type: 'Dulce',
        title: "Pan de muerto con crema de cacahuate",
        subtitle: "Has probado esta combinación?",
        img: "recipe4.jpg",
        time: "10 min",
        ingredients: [
            "Crema de cachuate Original",
            "Pan de muerto",
            "Plátano",
        ],
        proceso: [
            "Parte el pan de muerto a la mitad, unta crema de cacahuate y encima pon plátano rebanado"
        ],
        notas: []
    }
]

export { recipes };
db.produtos.find(
    { vendidos: { $not: { $eq: 50 } }, tags: { $exists: 0 } },
    { nome: 1, vendidos: 1, _id: 0 },
);
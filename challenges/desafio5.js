db.produtos.find(
    { $or: [{ vendidos: 85 }, { curtidas: 36 }] }, 
    { nome: true, curtidas: 1, vendidos: 1, _id: 0 },
);
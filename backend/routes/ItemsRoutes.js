import express from "express";
import Item from "../models/item.js";

const router = express.Router();

//Get 
router.get('/', async (req, res) => {
    try {
        const items = await Item.findAll(); 
        res.status(200).json(items);
    } catch (error) {
        res.status(500).json({ message: "Error fetching items", error });
    }
});

//Create
router.post('/',async(req,res)=>{
    const {name, price}= req.body;
    try {
        const newItem = await Item.create({name,price});
        res.status(201).json(newItem);
    } catch (error) {
        res.status(500).json({message: "Error fetching items",error})
    }
});


//update
router.put('/:id',async(req,res)=>{
    const {id}= req.params;
    const {name, price}= req.body;
    try {
        const item = await Item.findByPk(id);
        if (item){
            item.name = name;
            item.price = price;
            await item.save();
            res.status(200).json(item);
        }else{
            res.status(404).json({ message: "Item not found" });
        }
    } catch (error) {
        res.status(500).json({message: "Error fetching items",error})
    }
});


//Delete
router.delete('/:id',async(req,res)=>{
    const {id}= req.params;
    try {
        const item = await Item.findByPk(id);
        if (item){
            await item.destroy();
            res.status(200).json(item);
        }else{
            res.status(404).json({ message: "Item not found" });
        }
    } catch (error) {
        res.status(500).json({message: "Error fetching items",error})
    }
});

export default router;
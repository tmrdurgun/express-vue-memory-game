class MemoryController{
    constructor(){

    }

    async genRandNumbersList(size) {
        const list: number[] = [];

        for (let index = 0; index < size; index++) {
            const num: number = Math.floor(Math.random() * 90 + 10);
            list.push(num);
            
        }

        return list;
    }
}

export default MemoryController;
const Message = require("../module/message")

exports.postMessageHandler = async (req, res, next) => {
    console.log(req)
    const dayToString = () => {
        const today = new Date()
        const year = today.getFullYear()
        const month = (today.getMonth() + 1).toString().padStart(2, "0")
        const date = today.getDate().toString().padStart(2, "0")
        return `${year}${month}${date}`
    }
    const existingMessage = await Message.findOne({ date: dayToString() });
    if (existingMessage) {
        // 有資料則更新
        try {
            existingMessage.main.push({ user: req.body.main[0].user, desc: req.body.main[0].desc }); // 新增
            await existingMessage.save();
            return res.status(201).json(existingMessage);
        } catch (error) {
            return res.status(400).json({ error: error.message })
        }
    } else {
        // 無資料則新增
        try {
            const message = new Message(req.body);
            const savedMessage = await message.save();
            return res.status(201).json(savedMessage);
        } catch (error) {
            return res.status(400).json({ error: error.message })
        }

    }

    // try {
    //     const message = new Message(req.body);
    //     const savedMessage = await message.save();
    //     return res.status(201).json(savedMessage)
    // } catch (error) {
    //     return res.status(400).json({ error: error.message })
    // }

}
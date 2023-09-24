const Recommend = require("../module/recommend")

exports.postRecommendHandler = async (req, res, next) => {
    console.log(req)
    const dayToString = () => {
        const today = new Date()
        const year = today.getFullYear()
        const month = (today.getMonth() + 1).toString().padStart(2, "0")
        const date = today.getDate().toString().padStart(2, "0")
        return `${year}${month}${date}`
    }
    const existingRecommend = await Recommend.findOne({ date: dayToString() });
    if (existingRecommend) {
        // 有資料則更新
        try {
            existingRecommend.main.push({
                user: req.body.main[0].user,
                desc: req.body.main[0].desc,
                song: req.body.main[0].song,
                artist: req.body.main[0].artist,

            }); // 新增
            await existingRecommend.save();
            return res.status(201).json(existingRecommend);
        } catch (error) {
            return res.status(400).json({ error: error.message })
        }
    } else {
        // 沒有資料則新增
        try {
            const recommend = new Recommend(req.body);
            const savedRecommend = await recommend.save();
            return res.status(201).json(savedRecommend);
        } catch (error) {
            return res.status(400).json({ error: error.message })
        }

    }


}
const Music = require("../module/music")

exports.postMusicHandler = async (req, res, next) => {
    console.log(req)
    try {
        const music = new Music(req.body);
        const savedMusic = await music.save();
        return res.status(201).json(savedMusic)
    } catch (error) {
        return res.status(400).json({ error: error.message })
    }

}
exports.getMusicHandler = async (req, res, next) => {
    try {
        const musicList = await Music.find();
        res.json(musicList);
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}
exports.getMusicIdHandler = async (req, res, next) => {
    try {
        const {date} = req.params;
        const thatMusic = await Music.findOne({date: date});
        res.json(thatMusic);
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}


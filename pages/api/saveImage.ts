import { NextApiRequest, NextApiResponse } from 'next'
import multer from 'multer'
import { createReadStream, createWriteStream } from 'fs'

const upload = multer({ dest: 'uploads/'})

export const config = {
    api: {
        bodyParser: false
    }
}

const saveImage = async (req: NextApiRequest, res: NextApiResponse) => {
    // try {
    //     await new Promise<void>((resolve, reject) => {
    //         upload.single('image')(req, res, (error) => {
    //             if (error) {
    //                 reject(error)
    //             }
    //             resolve()
    //         })
    //     })

    //     console.log(req.file)
    //     const { originalname, mimetype, size, path } = req.file
    //     console.log(`Imagem original ${originalname} (${mimetype}, ${size} bytes)`)

    //     const writeStream = createWriteStream(`public/images/${originalname}`)
    //     const readStream = createReadStream(path)
    //     readStream.pipe(writeStream)

    //     await new Promise<void>((resolve, reject) => {
    //         readStream.on('end', resolve)
    //         readStream.on('error', reject)
    //     })

    //     console.log(`Imagem salva em public/images/${originalname}`)

    //     res.status(200).end()
    //     // const imageName = 'foto.jpg'
    //     // const path = `public/images/user/${imageName}`
    //     // await fs.promises.writeFile(path, Buffer.from(buffer))
    // } catch (err) {
    //     console.error(err)
    //     res.status(500).end()
    // }

//   const filePath = path.join(
//     process.cwd(),
//     'public',
//     'images',
//     imageName.toLowerCase() + '.jpg'
//   )

//   await fs.promises.writeFile(filePath, image)
    // res.status(200).json({ success: true })
}

export default saveImage

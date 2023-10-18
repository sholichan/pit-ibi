import fs from 'fs';
import path from 'path';
import Users from '../../models/Users';

const { parse } = require("csv-parse");

export default async (req:any, res:any) => {
  const { method } = req;

  switch (method) {
    case 'POST':
      try {
        const file = `${__dirname}/../../../amokasok.csv`;
        let filepath = path.resolve(file);
        const data = fs.readFileSync(filepath, 'utf8');

        parse(data, {
          from_line: 2,
          delimiter: ','
        }, (err:any, output:any) => {
          if (err) {
            console.log('Error: ', err);
            return;
          }

          console.log('Output: ', output[0]);

          output.forEach(async (item:any) => {
            const masok = await Users.create({
              data : {
                kota: item[0],
                name: item[1],
                whatsapp: item[2],
                email: item[3],
              }
            });
            console.log('Masok: ', masok);
          });
        });

        res.status(200).json({ success: true, data: 'Data imported' });
      } catch (error) {
        console.log('Error: ', error);
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}

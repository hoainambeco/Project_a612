const positionWarehousesModel = require('../models/positions.model');
const khoHangModel = require('../models/khoHang.models');

exports.getPositionWarehouses = async (req, res) => {
    const positionWarehousesList = await positionWarehousesModel.find({});
    res.json(positionWarehousesList);
}
exports.getPositionWarehouse = async (req, res) => {
    const warehouse = await khoHangModel.findOne({_id: req.params.idWarehouse});
    for (let i = 0; i < warehouse.floors; i++) {
        for (let j = 0; j < warehouse.row; j++) {
            for (let k = 0; k < warehouse.position; k++) {
                const objpositionWarehouses = new positionWarehousesModel({
                    idWarehouse: req.params.idWarehouse,
                    namePosition: `F${i}-R${j}-C${k}`,
                    status: 'false',
                });
                await objpositionWarehouses.save(function (err) {
                    if (err) {
                        console.log(err);
                    }
                });
            }
        }
    }
    res.json('Thêm thành công');
}
exports.postPositionWarehouses = async (req, res) => {
    console.log(req.body);
    const objpositionWarehouses = new positionWarehousesModel({
        idWarehouse: req.body.idWarehouse,
        namePosition: req.body.namePosition,
        status: req.body.status || 'false',
    });
    console.log(objpositionWarehouses);
    if (!objpositionWarehouses.idWarehouse || !objpositionWarehouses.namePosition) {
        res.json({
            'status': 'Vui lòng nhập dữ liệu đầy đủ'
        });
    } else {
        await objpositionWarehouses.save(function (err) {
            if (err) {
                console.log(err);
            }
            console.log('Thêm thành công');
            res.json(objpositionWarehouses);
        });
    }
}

exports.editPositionWarehouses = async (req, res) => {
    const position = await positionWarehousesModel.findOne({_id: req.params.id});
    const objpositionWarehouses = {
        idWarehouse: req.body.idWarehouse || position.idWarehouse,
        namePosition: req.body.namePosition || position.namePosition,
        status: req.body.status || 'false',
    };
    positionWarehousesModel.updateOne({_id: req.params.id}, objpositionWarehouses, function (err) {
        if (err) {
            return res.json({'status': err});
        } else {
            console.log('Sửa thành công');
            res.json(objpositionWarehouses);
        }
    });
}

exports.deletePositionWarehouses = (req, res) => {
    positionWarehousesModel.deleteMany({idWarehouse: req.params.idWarehouse}, function (err) {
        if (err) {
            return res.json({'status': err});
        } else {
            console.log('Xóa thành công');
            return res.json({'status': 'Xóa thành công'});
        }
    });
}

// PRODUCTOS
const productos = [
	// NIKE HOMBRE
	{
		id: "zapatillas-nike-01",
		descripcion: "Zapatiilas Nike Hombre",
		titulo: "Jordan Air 1 Low",
		imagen:
			"https://www.moov.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-365-dabra-catalog/default/dwdf4c185a/products/NI553558-063/NI553558-063-1.JPG?sw=400&sh=400",
		precio: 73699,
		categoria: {
			genero:"hombre",
			id: "nike",
		},
	},
	{
		id: "zapatillas-nike-02",
		descripcion: "Zapatiilas Nike Hombre",
		titulo: "Nike Air Force 1 07",
		imagen:
			"https://www.moov.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-365-dabra-catalog/default/dweceb8bd1/products/NIDQ7658-300/NIDQ7658-300-1.JPG?sw=400&sh=400",
		precio: 66999,
		categoria: {
			genero:"hombre",
			id: "nike",
		},
	},
	{
		id: "zapatillas-nike-03",
		descripcion: "Zapatiilas Nike Unisex",
		titulo: "Nike Air Vapormax",
		imagen:
			"https://www.moov.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-365-dabra-catalog/default/dw258ce489/products/NIDM0573-101/NIDM0573-101-1.JPG?sw=400&sh=400",
		precio: 109999,
		categoria: {
			genero:"Unisex",
			id: "nike",
		},
	},
	{
		id: "zapatillas-nike-04",
		descripcion: "Zapatiilas Nike Hombre",
		titulo: "Jordan Air Max Excee",
		imagen:
			"https://www.moov.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-365-dabra-catalog/default/dw7b898908/products/NIDQ3993-002/NIDQ3993-002-1.JPG?sw=400&sh=400",
		precio: 57499,
		categoria: {
			genero:"hombre",
			id: "nike",
		},
	},
	{
		id: "zapatillas-nike-05",
		descripcion: "Zapatiilas Nike Hombre",
		titulo: "Nike Court Legacy",
		imagen:
			"https://www.moov.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-365-dabra-catalog/default/dwbdf5d08f/products/NICW6539-601/NICW6539-601-1.JPG?sw=400&sh=400",
		precio: 34999,
		categoria: {
			genero:"hombre",
			id: "nike",
		},
	},
	{
		id: "zapatillas-nike-06 ",
		descripcion: "Zapatiilas Nike Hombre",
		titulo: "Nike court Legacy Canvas",
		imagen:
			"https://www.moov.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-365-dabra-catalog/default/dw0aa0f41d/products/NI_DV0516-700/NI_DV0516-700-1.JPG?sw=400&sh=400",
		precio: 34999,
		categoria: {
			genero:"hombre",
			id: "nike",
		},
	},

	// NIKE MUJER
	{
		id: "zapatillas-nike-07",
		descripcion: "Zapatiilas Nike Mujer",
		titulo: "Nike court Legacy Lift",
		imagen:
			"https://www.moov.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-365-dabra-catalog/default/dwf26be3c4/products/NIDM7590-001/NIDM7590-001-1.JPG?sw=400&sh=400",
		precio: 41999,
		categoria: {
			genero:"mujer",
			id: "nike",
		},
	},
	{
		id: "zapatillas-nike-08",
		descripcion: "Zapatiilas Nike Mujer",
		titulo: "Nike Air Max 90",
		imagen:
			"https://www.moov.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-365-dabra-catalog/default/dw7926eecd/products/NI_DM9922-100/NI_DM9922-100-1.JPG?sw=400&sh=400",
		precio: 87999,
		categoria: {
			genero:"mujer",
			id: "nike",
		},
	},
	{
		id: "zapatillas-nike-09",
		descripcion: "Zapatiilas Nike Mujer",
		titulo: "Nike Air Force 1 Fantanka",
		imagen:
			"https://www.moov.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-365-dabra-catalog/default/dwe144ea19/products/NI_DA7024-601/NI_DA7024-601-1.JPG?sw=400&sh=400",
		precio: 723999,
		categoria: {
			genero:"hombre",
			id: "nike",
		},
	},
	{
		id: "zapatillas-nike-10",
		descripcion: "Zapatiilas Nike Mujer",
		titulo: "Nike Gts 97",
		imagen:
			"https://www.moov.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-365-dabra-catalog/default/dw0d0099fa/products/NI_DB2880-600/NI_DB2880-600-1.JPG?sw=400&sh=400",
		precio: 29899,
		categoria: {
			genero:"mujer",
			id: "nike",
		},
	},
	{
		id: "zapatillas-nike-11",
		descripcion: "Zapatiilas Nike Unisex",
		titulo: "Nike Air Force Next",
		imagen:
			"https://www.moov.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-365-dabra-catalog/default/dw10d2d543/products/NI_DC9486-101/NI_DC9486-101-1.JPG?sw=400&sh=400",
		precio: 56999,
		categoria: {
			genero:"unisex",
			id: "nike",
		},
	},
	{
		id: "zapatillas-nike-12",
		descripcion: "Zapatiilas Nike Unisex",
		titulo: "Nike Force 1 Shadow",
		imagen:
			"https://www.moov.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-365-dabra-catalog/default/dw7829c3e7/products/NIDZ5193-100/NIDZ5193-100-1.JPG?sw=400&sh=400",
		precio: 69999,
		categoria: {
			genero:"unisex",
			id: "nike",
		},
	},

	// ADIDAS HOMBRE
	{
		id: "zapatillas-adidas-01",
		descripcion: "Zapatiilas Adidas Hombre",
		titulo: "Adidas Ozelia",
		imagen:
			"https://www.moov.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-365-dabra-catalog/default/dw9350745f/products/ADGV7685/ADGV7685-1.JPG?sw=400&sh=400",
		precio: 37199,
		categoria: {
			genero:"hombre",
			id: "adidas",
		},
	},
	{
		id: "zapatillas-adidas-02",
		descripcion: "Zapatiilas Adidas Hombre",
		titulo: "Adidas Forum Low",
		imagen:
			"https://www.moov.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-365-dabra-catalog/default/dw97a2c932/products/ADFZ5890/ADFZ5890-1.JPG?sw=400&sh=400",
		precio: 64999,
		categoria: {
			genero:"hombre",
			id: "adidas",
		},
	},
	{
		id: "zapatillas-adidas-03",
		descripcion: "Zapatiilas Adidas Hombre",
		titulo: "Adidas Niteball Li",
		imagen:
			"https://www.moov.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-365-dabra-catalog/default/dw8213c924/products/ADGX0771/ADGX0771-1.JPG?sw=400&sh=400",
		precio: 44499,
		categoria: {
			genero:"hombre",
			id: "adidas",
		},
	},
	{
		id: "zapatillas-adidas-04",
		descripcion: "Zapatiilas Adidas Hombre",
		titulo: "Adidas Multix",
		imagen:
			"https://www.moov.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-365-dabra-catalog/default/dwcaef212f/products/AD_FX5118/AD_FX5118-1.JPG?sw=400&sh=400",
		precio: 28699,
		categoria: {
			genero:"hombre",
			id: "adidas",
		},
	},
	{
		id: "zapatillas-adidas-05",
		descripcion: "Zapatiilas Adidas Hombre",
		titulo: "Adidas Nmb R1",
		imagen:
			"https://www.moov.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-365-dabra-catalog/default/dwa2954c4b/products/ADGX9887/ADGX9887-1.JPG?sw=400&sh=400",
		precio: 52799,
		categoria: {
			genero:"hombre",
			id: "adidas",
		},
	},
	{
		id: "zapatillas-adidas-06",
		descripcion: "Zapatiilas Adidas Unisex",
		titulo: "Adidas Ozweego",
		imagen:
			"https://www.moov.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-365-dabra-catalog/default/dw520fab1a/products/ADID4361/ADID4361-1.JPG?sw=400&sh=400",
		precio: 78999,
		categoria: {
			genero:"unisex",
			id: "adidas",
		},
	},

	//ADIDAS MUJER
	{
		id: "zapatillas-adidas-07",
		descripcion: "Zapatiilas Adidas Mujer",
		titulo: "Adidas Nizza",
		imagen:
			"https://www.moov.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-365-dabra-catalog/default/dwaae71b3a/products/ADGW3870/ADGW3870-1.JPG?sw=400&sh=400",
		precio: 28699,
		categoria: {
			genero:"mujer",
			id: "adidas",
		},
	},
	{
		id: "zapatillas-adidas-08",
		descripcion: "Zapatiilas Adidas Mujer",
		titulo: "Adidas Forum Bold",
		imagen:
			"https://www.moov.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-365-dabra-catalog/default/dw0af0fa85/products/ADGZ2613/ADGZ2613-1.JPG?sw=400&sh=400",
		precio: 71999,
		categoria: {
			genero:"mujer",
			id: "adidas",
		},
	},
	{
		id: "zapatillas-adidas-09",
		descripcion: "Zapatiilas Adidas Mujer",
		titulo: "Adidas Nmd R1",
		imagen:
			"https://www.moov.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-365-dabra-catalog/default/dw961be24d/products/ADGX2027/ADGX2027-1.JPG?sw=400&sh=400",
		precio: 52799,
		categoria: {
			genero:"mujer",
			id: "adidas",
		},
	},
	{
		id: "zapatillas-adidas-10",
		descripcion: "Zapatiilas Adidas Mujer",
		titulo: "Adidas Zenchill XXII",
		imagen:
			"https://www.moov.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-365-dabra-catalog/default/dw69bb95b6/products/AD_GZ4905/AD_GZ4905-1.JPG?sw=400&sh=400",
		precio: 72999,
		categoria: {
			genero:"mujer",
			id: "adidas",
		},
	},
	{
		id: "zapatillas-adidas-11",
		descripcion: "Zapatiilas Adidas Mujer",
		titulo: "Adidas",
		imagen:
			"https://www.moov.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-365-dabra-catalog/default/dw4bf86b89/products/ADGW6808/ADGW6808-1.JPG?sw=400&sh=400",
		precio: 37199,
		categoria: {
			genero:"mujer",
			id: "adidas",
		},
	},
	{
		id: "zapatillas-adidas-12",
		descripcion: "Zapatiilas Adidas Mujer",
		titulo: "Adidas Oznova",
		imagen:
			"https://www.moov.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-365-dabra-catalog/default/dwe16c42b6/products/ADGX7204/ADGX7204-1.JPG?sw=400&sh=400",
		precio: 47899,
		categoria: {
			genero:"mujer",
			id: "adidas",
		},
	},

	//PUMA HOMBRE
	{
		id: "zapatillas-puma-01",
		descripcion: "Zapatiilas Puma Hombre",
		titulo: "Puma Slipstream Sue",
		imagen:
			"https://www.moov.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-365-dabra-catalog/default/dw51da39df/products/PU388634-01/PU388634-01-1.JPG?sw=400&sh=400",
		precio: 43699,
		categoria: {
			genero:"hombre",
			id: "puma",
		},
	},
	{
		id: "zapatillas-puma-02",
		descripcion: "Zapatiilas Puma Hombre",
		titulo: "Puma TCR Blaze Fandom",
		imagen:
			"https://www.moov.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-365-dabra-catalog/default/dw1864a21a/products/PU386124-01/PU386124-01-1.JPG?sw=400&sh=400",
		precio: 42999,
		categoria: {
			genero:"hombre",
			id: "puma",
		},
	},
	{
		id: "zapatillas-puma-03",
		descripcion: "Zapatiilas Puma Hombre",
		titulo: "Puma Suede Classic",
		imagen:
			"https://www.moov.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-365-dabra-catalog/default/dw7a00031f/products/PU388981-68/PU388981-68-1.JPG?sw=400&sh=400",
		precio: 34799,
		categoria: {
			genero:"hombre",
			id: "puma",
		},
	},
	{
		id: "zapatillas-puma-04",
		descripcion: "Zapatiilas Puma Hombre",
		titulo: "Puma TCR Blace Chance",
		imagen:
			"https://www.moov.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-365-dabra-catalog/default/dw842f3573/products/PU_386430-01/PU_386430-01-1.JPG?sw=400&sh=400",
		precio: 33999,
		categoria: {
			genero:"hombre",
			id: "puma",
		},
	},
	//PUMA MUJER
	{
		id: "zapatillas-puma-05",
		descripcion: "Zapatiilas Puma Mujer",
		titulo: "Puma Mayze Leather S",
		imagen:
			"https://www.moov.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-365-dabra-catalog/default/dw3847e668/products/PU_388265-01/PU_388265-01-1.JPG?sw=400&sh=400",
		precio: 40999,
		categoria: {
			genero:"mujer",
			id: "puma",
		},
	},
	{
		id: "zapatillas-puma-06",
		descripcion: "Zapatiilas Puma Mujer",
		titulo: "Puma Future Rider",
		imagen:
			"https://www.moov.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-365-dabra-catalog/default/dwc9e59318/products/PU383683-03/PU383683-03-1.JPG?sw=400&sh=400",
		precio: 33899,
		categoria: {
			genero:"mujer",
			id: "puma",
		},
	},
	{
		id: "zapatillas-puma-07",
		descripcion: "Zapatiilas Puma Mujer",
		titulo: "Puma Slipstream",
		imagen:
			"https://www.moov.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-365-dabra-catalog/default/dw45076fa7/products/PU389023-03/PU389023-03-1.JPG?sw=400&sh=400",
		precio: 46599,
		categoria: {
			genero:"mujer",
			id: "puma",
		},
	},
	{
		id: "zapatillas-puma-08",
		descripcion: "Zapatiilas Puma Mujer",
		titulo: "Puma Rider FV Future",
		imagen:
			"https://www.moov.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-365-dabra-catalog/default/dw331e3a4f/products/PU_387672-01/PU_387672-01-1.JPG?sw=400&sh=400",
		precio: 28399,
		categoria: {
			genero:"mujer",
			id: "puma",
		},
	},
	//PUMA UNISEX
	{
		id: "zapatillas-puma-09",
		descripcion: "Zapatiilas Puma Unisex",
		titulo: "Puma RS-X ",
		imagen:
			"https://www.moov.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-365-dabra-catalog/default/dwecbb051a/products/PU392340-02/PU392340-02-1.JPG?sw=400&sh=400",
		precio: 47699,
		categoria: {
			genero:"unisex",
			id: "puma",
		},
	},
	{
		id: "zapatillas-puma-10",
		descripcion: "Zapatiilas Puma Unisex",
		titulo: "Puma RS-X Reinvention",
		imagen:
			"https://www.moov.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-365-dabra-catalog/default/dwbc081ec4/products/PU392339-15/PU392339-15-1.JPG?sw=400&sh=400",
		precio: 28399,
		categoria: {
			genero:"unisex",
			id: "puma",
		},
	},
	//CONVERSE HOMBRE
	{
		id: "zapatillas-converse-01",
		descripcion: "Zapatiilas Converse Hombre",
		titulo: "Converse Star Player",
		imagen:
			"https://www.moov.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-365-dabra-catalog/default/dw7774a749/products/CO172981C/CO172981C-1.JPG?sw=400&sh=400",
		precio: 25999,
		categoria: {
			genero:"hombre",
			id: "converse",
		},
	},
	{
		id: "zapatillas-converse-02",
		descripcion: "Zapatiilas Converse Hombre",
		titulo: "Converse Star Player",
		imagen:
			"https://www.moov.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-365-dabra-catalog/default/dw9a8b5cd9/products/CO172982C/CO172982C-1.JPG?sw=400&sh=400",
		precio: 25999,
		categoria: {
			genero:"hombre",
			id: "converse",
		},
	},

	//CONVERSE MUJER
	{
		id: "zapatillas-converse-03",
		descripcion: "Zapatiilas Converse Mujer",
		titulo: "Converse Core HI",
		imagen:
			"https://www.moov.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-365-dabra-catalog/default/dwa14779ec/products/CO156999C/CO156999C-1.JPG?sw=400&sh=400",
		precio: 29299,
		categoria: {
			genero:"mujer",
			id: "converse",
		},
	},
	{
		id: "zapatillas-converse-04",
		descripcion: "Zapatiilas Converse Mujer",
		titulo: "Converse All Star",
		imagen:
			"https://www.moov.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-365-dabra-catalog/default/dw8bd2047d/products/CO_157002C/CO_157002C-1.JPG?sw=400&sh=400",
		precio: 36699,
		categoria: {
			genero:"mujer",
			id: "converse",
		},
	},
	//CONVERSE UNISEX
	{
		id: "zapatillas-underArmour-05",
		descripcion: "Zapatiilas Converse Unisex",
		titulo: "Converse Chuck Taylor",
		imagen:
			"https://www.moov.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-365-dabra-catalog/default/dwcb483c87/products/CO_156994C/CO_156994C-1.JPG?sw=400&sh=400",
		precio: 29500,
		categoria: {
			genero:"unisex",
			id: "converse",
		},
	},

	//UNDER ARMOUR HOMBRE
	{
		id: "zapatillas-underArmour-01",
		descripcion: "Under Armour Hombre",
		titulo: "Under Armour Charged",
		imagen:
			"https://www.dexter.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-365-dabra-catalog/default/dw932aff0c/products/UA3024873-100/UA3024873-100-1.JPG?sw=400&sh=400",
		precio: 28999,
		categoria: {
			genero:"hombre",
			id: "under-armour",
		},
	},
	{
		id: "zapatillas-underArmour-02",
		descripcion: "Under Armour Hombre",
		titulo: "Under Armour Rock 5",
		imagen:
			"https://www.dexter.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-365-dabra-catalog/default/dw6b21bcc8/products/UA3025976-401/UA3025976-401-1.JPG?sw=400&sh=400",
		precio: 58999,
		categoria: {
			genero:"hombre",
			id: "under-armour",
		},
	},
	//UNDER ARMOUR MUJER4
	{
		id: "zapatillas-underArmour-03",
		descripcion: "Under Armour Mujer",
		titulo: "Under Armour W Charged",
		imagen:
			"https://www.dexter.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-365-dabra-catalog/default/dw6d40b288/products/UA_3025928-600/UA_3025928-600-1.JPG?sw=400&sh=400",
		precio: 23999,
		categoria: {
			genero:"mujer",
			id: "under-armour",
		},
	},
	{
		id: "zapatillas-underArmour-04",
		descripcion: "Under Armour Mujer",
		titulo: "Under Armour Slight",
		imagen:
			"https://www.dexter.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-365-dabra-catalog/default/dw41ad062c/products/UA_3025928-002/UA_3025928-002-1.JPG?sw=400&sh=400",
		precio: 33699,
		categoria: {
			genero:"mujer",
			id: "under-armour",
		},
	},
	{
		id: "zapatillas-underArmour-05",
		descripcion: "Under Armour Mujer",
		titulo: "Under Armour Phantom 3",
		imagen:
			"https://www.dexter.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-365-dabra-catalog/default/dw070032f7/products/UA3026466-100/UA3026466-100-1.JPG?sw=400&sh=400",
		precio: 58999,
		categoria: {
			genero:"mujer",
			id: "under-armour",
		},
	},
	//UNDER ARMOUR UNISEX
	{
		id: "zapatillas-underArmour-06",
		descripcion: "Under Armour Unisex",
		titulo: "Under Armour Proyect Rock",
		imagen:
			"https://www.dexter.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-365-dabra-catalog/default/dwfbefc5c3/products/UA3025081-601/UA3025081-601-1.JPG?sw=400&sh=400",
		precio: 58999,
		categoria: {
			genero:"unisex",
			id: "under-armour",
		},
	},
];

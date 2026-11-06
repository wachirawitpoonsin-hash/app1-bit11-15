//นำเข้า  วิิว    ข้อความ             จาก   ชื่อไลบรารี่
import { StyleSheet, Text, View, Image} from 'react-native';

//ส่งออก เริ่มต้น    ฟังก์ชั่น  ชื่อฟังชั่น แล้วใช้ร่วมกัน//
export default function App(){
  return(
   <View style={homeStyle.container} >
      <Text style={homeStyle.title}>wachirawt</Text>

      <Image 
      source={require('@/assets/po(1).jpeg')}
        style={{
          width: 200, //กว่าง
          height: 200, //สูง
          borderRadius: 150, //มุมโค้ง
          borderWidth: 10, //ขอบหนา
          borderColor: "lightblue", //สีขอบ
        }}
      />
      <Image 
        source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJP0lLF4sxZxb77yv810KsSZ2YGXcRZ-wzdg_dwOilxQ&s=10"}}
         style={{
          width: 200, //กว่าง
          height: 200, //สูง
          borderRadius: 150, //มุมโค้ง
          borderWidth: 10, //ขอบหนา
          borderColor: "lightblue", //สีขอบ
        }}
      />

      <View>
        <Text>😭 งานเยอะ</Text>
        <Text>🫥 หายตัว</Text>
      </View>

    </View>
  )
}
// สร้างสไตล์ตกแต่ว
const homeStyle = StyleSheet.create({
  container:{
   backgroundColor: "red", //สีพื้นหลัง
   flex:1, //ขยายเต็มพื้นที่
   alignItems: "center"
  },
  title:{
    color: "white",//สีตัวอักษร
    fontSize: 32, //ขนาดอักษร
    fontWeight: 700, //ความหนาตัวอักษร 100-900
    fontStyle: "italic", //เอียง
    textAlign: "center"// 
  }
})
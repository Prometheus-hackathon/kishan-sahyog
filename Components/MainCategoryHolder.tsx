import { Surface,Text } from "react-native-paper";
import { TouchableOpacity,Image } from "react-native";
import React from "react";
export function MainCategoryHolder({url,children,setState}:{url:string,children:string,setState:React.Dispatch<React.SetStateAction<boolean>>}){
return <TouchableOpacity
                    onPress={()=>{
                            setState(prev=>true)
                    }}
                activeOpacity={0.8}
                style={{
                  width: "40%",
                  height: "26%",
                  margin: 10,
                }}
              >
                <Surface
                  style={{
                    margin: 10,
                    padding: 10,

                    borderRadius: 10,
                  }}
                  elevation={3}
                >
                  <Image
                    style={{
                      height: "88%",
                      width: "100%",
                      borderRadius: 10,
                    }}
                    source={{
                      uri: url,
                    }}
                  />
                  <Text
                    variant="labelMedium"
                    style={{
                      textAlign: "center",
                      marginTop: 10,
                    }}
                  >
                   {children}
                  </Text>
                </Surface>
              </TouchableOpacity>

}
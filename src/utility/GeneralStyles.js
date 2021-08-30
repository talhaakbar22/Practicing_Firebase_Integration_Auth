export const fullDisplay = {
  flex: 1,
  width: "100%",
  height: "100%",
};
export const row = {
  flexDirection: "row",
};
export const contentCenter = {
  justifyContent: "center",
  alignItems: "center",
};
export const font = (size, color,TA,FW) => {
  return {
    fontWeight: FW,
    fontSize: size,
    color: color,
    textAlign:TA,
  };
};
export const squareImage = (size) => {
  return {
    width: size,
    height: size,
  };
};
export const Margin = (T, R, B, L, type) => {
  let x = {};
  let is_percent = type === "%" ? "%" : "";
  x["marginTop"] = T + is_percent;
  x["marginRight"] = R + is_percent;
  x["marginBottom"] = B + is_percent;
  x["marginLeft"] = L + is_percent;
  return x;
};
export const Padding = (T, R, B, L) => {
  let x = {};
  x["paddingTop"] = T ;
  x["paddingRight"] = R ;
  x["paddingBottom"] = B ;
  x["paddingLeft"] = L ;
  return x;
};
export const View = (width, height, bg_color,type) => {
  let x = {};
  let is_percent = type === "%" ? "%" : "";
  x["width"] = width + is_percent;
  x["height"] = height ;
  x["backgroundColor"] = bg_color;
  return x;
};
export const Radius = (TLR,TRR,BLR,BRR) => {
  let x = {};
  x["borderTopLeftRadius"] = TLR;
  x["borderTopRightRadius"] = TRR;
  x["borderBottomLeftRadius"] = BLR;
  x["borderBottomRightRadius"] = BRR;
  return x;
};
export const Axis = (width,height)=>{
  let x={};
  x["width"]=width;
  x["height"]=height;
  return x;
};
export const Colour = (bgColor,borderColor)=>{
  let x={};
  x["backgroundColor"]=bgColor;
  x["borderColor"]=borderColor;
  return x;
};
export const BorderWidth = (BTW,BRW,BBW,BLW)=>{
  let x={};
  x["borderTopWidth"]=BTW;
  x["borderRightWidth"]=BRW;
  x["borderBottomWidth"]=BBW;
  x["borderLeftWidth"]=BLW;
  return x;
};
export const Align = (AI,AC,AS,)=>{
  let x={};
  x["alignItems"]=AI;
  x["alignContent"]=AC;
  x["alignSelf"]=AS;
  return x;
};
export const Justify = (JC,JI,JS)=>{
  let x={};
  x["justifyContent"]=JC;
  x["justifyItems"]=JI;
  x["justifySelf"]=JS;
  return x;
};
export const Flex = (flex,FD)=>{
  let x={};
  x["flex"]=flex;
  x["flexDirection"]=FD;
  return x;
};
export const Positions = (A,R)=>{
  let x={};
  x["position"]=A;
  x["position"]=R;
  return x;
};
export const SP = (T,R,B,L)=>{
  let x={};
  x["Top"]=T;
  x["Right"]=R;
  x["Bottom"]=B;
  x["Left"]=L;
  return x;
};

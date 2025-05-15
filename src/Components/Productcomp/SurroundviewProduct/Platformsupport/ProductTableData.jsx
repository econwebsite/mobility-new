import React from 'react';
import Table from 'react-bootstrap/Table';
import "./ProductTableData.css"; 
import NewReleasesIcon from "../../../../assets/new-icon.png";
import Modelbutton from "../../../ButtonComp/Modelbutton";
import AnimationButton from "../../../ButtonComp/AnimationButton";

function ProductTableData({ 
  tableData, 
  imageSrc, 
  title, 
  highlights, 
  documentname,
  doctitle,
  buynow
}) {
  return (
    <div className="ProductTableData-TotalContBox">
      <div className="mainContainer">
        <div className='ProductTable-Box'>
          <h4 className="ProductTable-title">
            {title === "STURDeCAM88 - 4K 140dB HDR GMSL2 Camera Module" && (
              <img src={NewReleasesIcon} alt="New" className="ProductTable-icon" />
            )}
            {title}
          </h4>

          <div className="ProductTableData-ImageHighlightRow">
            <div className="ProductTableData-ImageColumn">
              {imageSrc && <img src={imageSrc} alt="Product" />}
            </div>

            <div className="ProductTableData-HighlightColumn">
              <h5 className="highlight-heading">Highlights</h5>
            <ul className="highlight-list">
  {highlights?.map((item, index) => (
    <li key={index} dangerouslySetInnerHTML={{ __html: item }} />
  ))}
</ul>

            </div>
          </div>

          <div className="ProductTabs-total-Button">
           {buynow && (
    <AnimationButton 
      text="Buy now" 
      className="ProductTabs-Button1" 
      backgroundColor="#00aeef" 
      hoverColor="#344ea1" 
      to={buynow}
    />
  )}
            <Modelbutton 
              text="Contact Us"
              className="ProductTabs-Button" 
              backgroundColor="#344ea1" 
              hoverColor="#00aeef"
            />
            <Modelbutton 
              text="Download Tech document" 
              className="ProductTabs-Button"
              backgroundColor="#344ea1" 
              hoverColor="#00aeef"
              productName="ProductDocument" 
              docName={documentname} 
              title={doctitle} 
            />
          </div>
        </div>

        <div className="ProductTableData-TableWrapper">
        <Table
  responsive
  bordered
  className="w-100 product-spec-table"
  style={{ borderColor: '#344ea1' }}
>
  <tbody>
    {tableData.map((row, index) => (
      <tr key={index}>
        {row.length === 1 ? (
          <td colSpan="2" className="table-cell" dangerouslySetInnerHTML={{ __html: row[0] }} />
        ) : (
          row.map((cell, i) => (
            <td
              key={i}
              className={`table-cell ${i === 0 ? 'label-cell' : 'value-cell'}`}
              dangerouslySetInnerHTML={{ __html: cell }}
            />
          ))
        )}
      </tr>
    ))}
  </tbody>
</Table>

        </div>
      </div>
    </div>
  );
}

export default ProductTableData;
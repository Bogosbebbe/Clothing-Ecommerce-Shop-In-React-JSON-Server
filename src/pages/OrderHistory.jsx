import React from "react";
import { SectionTitle } from "../components";

const OrderHistory = () => {
  return (
    <>
    <SectionTitle title="Order History" path="Home | Order History" />
    <div className="order-history-main max-w-7xl mx-auto mt-10">
      <div className="collapse collapse-plus bg-base-200 mb-2">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
          Order 1 - cancelled
        </div>
        <div className="collapse-content">
          <div className="overflow-x-auto">
            <table className="table table-pin-rows">
              {/* head */}
              <thead>
                <tr>
                  <th>Order</th>
                  <th>Name</th>
                  <th>Size</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                <tr>
                  <th>1</th>
                  <td>Cy Ganderton</td>
                  <td>Quality Control Specialist</td>
                  <td>$199</td>
                </tr>
                {/* row 2 */}
                <tr>
                  <th>2</th>
                  <td>Hart Hagerty</td>
                  <td>Desktop Support Technician</td>
                  <td>$200</td>
                </tr>
                {/* row 3 */}
                <tr>
                  <th>3</th>
                  <td>Brice Swyre</td>
                  <td>Tax Accountant</td>
                  <td>$200</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200 mb-2">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
          Order 2 - in progress
        </div>
        <div className="collapse-content">
          <div className="overflow-x-auto">
            <table className="table table-pin-rows">
              {/* head */}
              <thead>
                <tr>
                  <th>Order</th>
                  <th>Name</th>
                  <th>Size</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                <tr>
                  <th>1</th>
                  <td>Cy Ganderton</td>
                  <td>Quality Control Specialist</td>
                  <td>$199</td>
                </tr>
                {/* row 2 */}
                <tr>
                  <th>2</th>
                  <td>Hart Hagerty</td>
                  <td>Desktop Support Technician</td>
                  <td>$200</td>
                </tr>
                {/* row 3 */}
                <tr>
                  <th>3</th>
                  <td>Brice Swyre</td>
                  <td>Tax Accountant</td>
                  <td>$200</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200 mb-2">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
          Order 3 - delivered
        </div>
        <div className="collapse-content">
          <div className="overflow-x-auto">
            <table className="table table-pin-rows">
              {/* head */}
              <thead>
                <tr>
                  <th>Order</th>
                  <th>Name</th>
                  <th>Size</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                <tr>
                  <th>1</th>
                  <td>Cy Ganderton</td>
                  <td>Quality Control Specialist</td>
                  <td>$199</td>
                </tr>
                {/* row 2 */}
                <tr>
                  <th>2</th>
                  <td>Hart Hagerty</td>
                  <td>Desktop Support Technician</td>
                  <td>$200</td>
                </tr>
                {/* row 3 */}
                <tr>
                  <th>3</th>
                  <td>Brice Swyre</td>
                  <td>Tax Accountant</td>
                  <td>$200</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default OrderHistory;

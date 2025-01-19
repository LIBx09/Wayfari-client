/* eslint-disable react/prop-types */
const Guides = ({ tourGuide, idx }) => {
  const { photo, name, email, role } = tourGuide;
  // this component used in package details page
  return (
    <>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}

          <tbody>
            {/* row 1 */}
            <tr>
              <th>{idx + 1}</th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img src={photo} alt="profile" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{name}</div>
                  </div>
                </div>
              </td>
              <td>{email}</td>
              <td>{role}</td>
              <th>
                <button className="btn btn-ghost btn-xs">details</button>
              </th>
            </tr>
          </tbody>
          {/* foot */}
        </table>
      </div>
    </>
  );
};

export default Guides;

import React from "react";
import { NavLink } from "react-router-dom";

const StaffPicks = () => {
  return (
    <>
      <div className="flex flex-col text-left shadow-xl p-3 sm:hidden lg:block">
        <section className="p-3 space-y-3">
          <h3 className="font-semibold">Staff Picks</h3>
          <div>
            <div>
              <img src="" alt="" />{" "}
              <span>Lorem ipsum dolor sit amet consectetur.</span>
              <p className="text-2xl font-bold">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui,
                beatae!
              </p>
            </div>
          </div>
          <div>
            <div>
              <img src="" alt="" />{" "}
              <span>Lorem ipsum dolor sit amet consectetur.</span>
              <p className="text-2xl font-bold">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui,
                beatae!
              </p>
            </div>
          </div>
          <div>
            <div>
              <img src="" alt="" />{" "}
              <span>Lorem ipsum dolor sit amet consectetur.</span>
              <p className="text-2xl font-bold">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui,
                beatae!
              </p>
            </div>
          </div>
          <NavLink className="text-green-700 font-semibold">
            See the full list
          </NavLink>
        </section>
        <section className="space-y-3">
          <div className="space-y-2">
            <h3 className="font-semibold">Recommended topics</h3>
            <div className="grid grid-cols-2 gap-3">
              <NavLink>
                <button className="border-solid border-[1px] border-black rounded-full p-1">
                  Data Science
                </button>
              </NavLink>
              <NavLink>
                <button className="border-solid border-[1px] border-black rounded-full p-1">
                  Technology
                </button>
              </NavLink>
              <NavLink>
                <button className="border-solid border-[1px] border-black rounded-full p-1">
                  Self Improvement
                </button>
              </NavLink>
              <NavLink>
                <button className="border-solid border-[1px] border-black rounded-full p-1">
                  Writing
                </button>
              </NavLink>
              <NavLink>
                <button className="border-solid border-[1px] border-black rounded-full p-1">
                  Machine Learning
                </button>
              </NavLink>
              <NavLink>
                <button className="border-solid border-[1px] border-black rounded-full p-1">
                  Cryptocurrency
                </button>
              </NavLink>
              <NavLink>
                <button className="border-solid border-[1px] border-black rounded-full p-1">
                  Python
                </button>
              </NavLink>
              <NavLink>
                <button className="border-solid border-[1px] border-black rounded-full p-1">
                  Web Development
                </button>
              </NavLink>
            </div>
            <NavLink>
              <button className="text-green-700 font-semibold">
                See more topics
              </button>
            </NavLink>
          </div>
        </section>
        <section className="space-y-3">
          <div className="mt-2">
            <h3 className="font-semibold">Who to follow</h3>
            <NavLink>
              <div>
                <div className="grid grid-cols-3">
                <img src="" alt="" className="row-span-2"/>
                <span className="font-bold">Theodore John.S</span>
                <button className="border-2 border-solid rounded-full p-1 w-20 border-black row-span-2">
                  Follow
                </button>
                </div>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Nesciunt, suscipit.
                </p>
              </div>
            </NavLink>
            <NavLink>
              <div>
                <div className="grid grid-cols-3">
                <img src="" alt="" className="row-span-2"/>
                <span className="font-bold">Will Lockett</span>
                <button className="border-2 border-solid rounded-full p-1 w-20 border-black row-span-2">
                  Follow
                </button>
                </div>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Nesciunt, suscipit.
                </p>
              </div>
            </NavLink>
            <NavLink>
              <div>
                <div className="grid grid-cols-3">
                <img src="" alt="" className="row-span-2"/>
                <span className="font-bold">Josef Cruz</span>
                <button className="border-2 border-solid rounded-full p-1 w-20 border-black row-span-2">
                  Follow
                </button>
                </div>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Nesciunt, suscipit.
                </p>
              </div>
            </NavLink>
            <NavLink className="font-semibold text-green-700">See more suggestions</NavLink>
          </div>
        </section>
        <section className="space-y-3">
          <div className="space-y-3 mt-6">
            <h3 className="font-semibold">Recently saved</h3>
            <img src="" alt="" />
            <span className="font-semibold text-sm">Danusha Navod in Bits and Pieces</span>
            <NavLink>
              <p className="font-bold">7 Node.js Design Patterns Every Developer Should know</p>
            </NavLink>
            <p>Feb 7,2024 . 10 min read</p>
            <NavLink className="text-green-700 font-semibold">See all (1)</NavLink>
          </div>
        </section>
        <footer className="mt-6 text-gray-95000">
          <nav>
            <ul className="text-sm flex space-x-3 overflow-hidden whitespace-nowrap">
              <NavLink>Help</NavLink>
              <NavLink>Status</NavLink>
              <NavLink>About</NavLink>
              <NavLink>Careers</NavLink>
              <NavLink>Blog</NavLink>
              <NavLink>Privacy</NavLink>
              <NavLink>Terms</NavLink>
              <NavLink>Text to speech</NavLink>
              <NavLink>Teams</NavLink>
            </ul>
          </nav>
        </footer>
      </div>
    </>
  );
};

export default StaffPicks;

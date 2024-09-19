var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
// Get form and preview elements
var form = document.getElementById("resumeForm");
var resumePage = document.getElementById("resumePage");
var resumePhoto = document.getElementById("resumePhoto");
var resumeName = document.getElementById("resumeName");
var resumeEmail = document.getElementById("resumeEmail");
var resumePhone = document.getElementById("resumePhone");
var resumeEducation = document.getElementById("resumeEducation");
var resumeWorkExperience = document.getElementById("resumeWorkExperience");
var resumeSkills = document.getElementById("resumeSkills");
var downloadPdfButton = document.getElementById('download-pdf');
var backButton = document.getElementById("backButton");
var editButton = document.getElementById("editButton");
var resumeContent = document.getElementById("resumeContent");
var shareLinkButton = document.getElementById("shareLinkButton");
// Ensure button listeners are added on page load
window.addEventListener('DOMContentLoaded', function () {
    var _a;
    var params = new URLSearchParams(window.location.search);
    var name = params.get('name') || '';
    var email = params.get('email') || '';
    var phone = params.get('phone') || '';
    var degree = params.get('degree') || '';
    var education = params.get('education') || '';
    var workExperience = params.get('workExperience') || '';
    var skills = params.get('skills') || '';
    // Populate resume if params exist
    if (name || email || phone || degree || education || workExperience || skills) {
        resumeName.textContent = name;
        resumeEmail.textContent = "Email: ".concat(email);
        resumePhone.textContent = "Phone: ".concat(phone);
        resumeEducation.textContent = "".concat(degree, " from ").concat(education);
        resumeWorkExperience.textContent = workExperience;
        resumeSkills.textContent = skills;
        var savedPhoto = localStorage.getItem("resumePhoto");
        if (savedPhoto) {
            resumePhoto.src = savedPhoto;
        }
        (_a = document.querySelector(".container")) === null || _a === void 0 ? void 0 : _a.classList.add("hidden");
        resumePage.classList.remove("hidden");
    }
    // Add the share button listener here
    shareLinkButton.addEventListener("click", function () {
        var _a, _b, _c, _d;
        var queryParams = new URLSearchParams({
            name: resumeName.textContent || '',
            email: ((_a = resumeEmail.textContent) === null || _a === void 0 ? void 0 : _a.replace('Email: ', '')) || '',
            phone: ((_b = resumePhone.textContent) === null || _b === void 0 ? void 0 : _b.replace('Phone: ', '')) || '',
            degree: ((_c = resumeEducation.textContent) === null || _c === void 0 ? void 0 : _c.split(' from ')[0]) || '',
            education: ((_d = resumeEducation.textContent) === null || _d === void 0 ? void 0 : _d.split(' from ')[1]) || '',
            workExperience: resumeWorkExperience.textContent || '',
            skills: resumeSkills.textContent || '',
        });
        var uniqueUrl = "".concat(window.location.origin, "?").concat(queryParams.toString());
        navigator.clipboard.writeText(uniqueUrl);
        alert('Shareable link copied to clipboard!');
    });
});
// Handle form submission
form.addEventListener("submit", function (event) { return __awaiter(_this, void 0, void 0, function () {
    var name, email, phone, degree, education, workExperience, skills, photoInput, photoFile, photoBase64, queryParams, uniqueUrl;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                event.preventDefault();
                name = document.getElementById("name").value;
                email = document.getElementById("email").value;
                phone = document.getElementById("phone").value;
                degree = document.getElementById("degree").value;
                education = document.getElementById("education").value;
                workExperience = document.getElementById("workExperience").value;
                skills = document.getElementById("skills").value;
                photoInput = document.getElementById("photo");
                photoFile = photoInput.files ? photoInput.files[0] : null;
                photoBase64 = '';
                if (!photoFile) return [3 /*break*/, 2];
                return [4 /*yield*/, fileToBase64(photoFile)];
            case 1:
                photoBase64 = _b.sent();
                // Store the photo in localStorage instead of passing it in the URL
                localStorage.setItem("resumePhoto", photoBase64);
                resumePhoto.src = photoBase64;
                _b.label = 2;
            case 2:
                // Populate the resume preview
                resumeName.textContent = name;
                resumeEmail.textContent = "Email: ".concat(email);
                resumePhone.textContent = "Phone: ".concat(phone);
                resumeEducation.textContent = "".concat(degree, " from ").concat(education);
                resumeWorkExperience.textContent = workExperience;
                resumeSkills.textContent = skills;
                // Hide form and show resume page
                (_a = document.querySelector(".container")) === null || _a === void 0 ? void 0 : _a.classList.add("hidden");
                resumePage.classList.remove("hidden");
                queryParams = new URLSearchParams({
                    name: name,
                    email: email,
                    phone: phone,
                    degree: degree,
                    education: education,
                    workExperience: workExperience,
                    skills: skills,
                });
                uniqueUrl = "".concat(window.location.origin, "?").concat(queryParams.toString());
                window.history.replaceState(null, '', "?".concat(queryParams.toString()));
                return [2 /*return*/];
        }
    });
}); });
// Convert photo to Base64
function fileToBase64(file) {
    return new Promise(function (resolve, reject) {
        var reader = new FileReader();
        reader.onloadend = function () { return resolve(reader.result); };
        reader.onerror = reject;
        reader.readAsDataURL(file);
    });
}
// Add back button functionality to go back to the form
backButton.addEventListener("click", function () {
    var _a;
    (_a = document.querySelector(".container")) === null || _a === void 0 ? void 0 : _a.classList.remove("hidden");
    resumePage.classList.add("hidden");
    // Optionally clear query parameters
    window.history.replaceState(null, '', '/');
});
// Add edit button functionality
editButton.addEventListener("click", function () {
    var _a;
    updateFormFromResume();
    (_a = document.querySelector(".container")) === null || _a === void 0 ? void 0 : _a.classList.remove("hidden");
    resumePage.classList.add("hidden");
});
// Function to update the form fields with current resume data
function updateFormFromResume() {
    var _a, _b, _c;
    var _d = ((_a = resumeEducation.textContent) === null || _a === void 0 ? void 0 : _a.split(" from ")) || [], degree = _d[0], education = _d[1];
    document.getElementById("name").value = resumeName.textContent || '';
    document.getElementById("email").value = ((_b = resumeEmail.textContent) === null || _b === void 0 ? void 0 : _b.replace('Email: ', '')) || '';
    document.getElementById("phone").value = ((_c = resumePhone.textContent) === null || _c === void 0 ? void 0 : _c.replace('Phone: ', '')) || '';
    document.getElementById("degree").value = degree || '';
    document.getElementById("education").value = education || '';
    document.getElementById("workExperience").value = resumeWorkExperience.textContent || '';
    document.getElementById("skills").value = resumeSkills.textContent || '';
}
// Handle PDF download
downloadPdfButton.addEventListener('click', function () {
    if (typeof html2pdf === 'undefined') {
        alert('Error: html2pdf library is not loaded.');
        return;
    }
    var resumeOptions = {
        margin: 0.5,
        filename: 'resume.pdf',
        image: { type: 'jpeg', quality: 1.0 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };
    html2pdf()
        .from(resumeContent)
        .set(resumeOptions)
        .save()
        .catch(function (error) {
        console.error('PDF generation error:', error);
    });
});
